import React, { FC, ReactNode, useRef, useEffect, useState } from "react";
import scrollLock from "../lib/scrollLock";
import clsx from "clsx";
import { NewsHeading } from "./NewsHeading";
import { ButtonStyles } from "./ButtonStyles";
import { Watercolor } from "./Watercolor";
import { Link } from "gatsby";

interface ModalProps {
  children?: ReactNode;
}

const Modal: FC<ModalProps> = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (dialogRef.current) {
      if (sessionStorage.getItem("modalShown") === "true") {
        return;
      }
      scrollLock.enable();
      dialogRef.current.showModal();
      setIsModalOpen(true);
      sessionStorage.setItem("modalShown", "true");
    }
  }, []);

  const closeModal = () => {
    if (dialogRef.current) {

      scrollLock.disable();
      dialogRef.current.close();
      setIsModalOpen(false);
    }
  };

  // close modal on escape^
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  });

  return (
    <div className={
      clsx("fixed inset-0 z-modal flex items-center justify-center bg-black bg-opacity-[0.95] md:bg-opacity-90 duration-300 ease-in-out w-full h-full",
        {
          "opacity-0 pointer-events-none": !isModalOpen
        })
    }>
      <NewsHeading
        className="text-white opacity-30 md:hidden pointer-events-none absolute -right-20 -top-0 w-full h-auto " />
      <dialog
        ref={dialogRef}
        className="w-full h-full overflow-hidden bg-transparent flex items-center justify-center"
      >
        <div
          className={clsx(
            "md:w-[480px] bg-white px-6 pt-10 pb-6 rounded-xl shadow-md transform scale-0 transition-transform duration-300 ease-in-out ",
            {
              "scale-100": isModalOpen
            }
          )}
        >
          <NewsHeading
            className="hidden md:block text-white pointer-events-none absolute -right-20 -top-16 w-full h-auto " />
          <Watercolor color="black"
                      className="z-0 opacity-[0.05] transform rotate-[270deg] w-[500px] absolute -left-10 top-[-520px] " />
          <Watercolor color="black"
                      className="z-0 opacity-10 transform rotate-[260deg] w-[500px] absolute -left-10 bottom-[-555px]" />
          <button
            className="absolute top-2 left-2 -translate-y-full text-5xl md:text-4xl text-white font-bold p-2 focus:outline-none md:focus:outline-primary"
            onClick={closeModal}>&times;</button>
          <div className="overflow-hidden relative">
            <div>
              <div className="font-semibold  leading-none mb-4 text-lg md:text-2xl"> Neue Preise ab 2024</div>
              <div className="rich-text xs:text-lg">
                <p>
                  Liebe Kund*innen
                </p>

                <p>
                  Ab dem 1. Januar 2024 erhöhen wir unsere Preise um ca. 10%.
                  Hmpf! Nervig, wissen wir. Aber auch unumgänglich.
                  Genauere Infos und die neue Preise findet ihr <Link onClick={closeModal} to={'/diary/unsere-preise-2024'}>im Diary</Link>.
                </p>
                <p>
                  Seid lieb zueinander, alles Gute und auf bald!<br />
                </p>
                <p>
                  Euer Shearer Creative Studio ❤️
                </p>
              </div>
              <div className="flex mt-6 md:mt-5 justify-center md:justify-end">
                <button onClick={closeModal}>
                  <ButtonStyles className=" !py-3">Verstanden</ButtonStyles>
                </button>
              </div>
            </div>

          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
