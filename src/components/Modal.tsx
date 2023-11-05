import React, { FC, ReactNode, useRef, useEffect, useState } from "react";
import scrollLock from "../lib/scrollLock";
import clsx from "clsx";
import { NewsHeading } from "./NewsHeading";
import { ButtonStyles } from "./ButtonStyles";
import { Watercolor } from "./Watercolor";

interface ModalProps {
  children?: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (dialogRef.current && !sessionStorage.getItem("modalShown")) {
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

  return (
    <div className={
      clsx("fixed inset-0 z-modal flex items-center justify-center bg-black bg-opacity-90 duration-300 ease-in-out w-full h-full",
        {
          "opacity-0 pointer-events-none": !isModalOpen
        })
    }>
      <NewsHeading className="text-white opacity-25 md:hidden pointer-events-none absolute -right-20 -top-0 w-full h-auto " />
      <dialog
        ref={dialogRef}
        className="w-full h-full overflow-hidden bg-transparent flex items-center justify-center"
      >
        <div
          className={clsx(
            "md:w-[480px] bg-white px-6 pt-10 pb-6 rounded-xl shadow-md transform scale-0 transition-transform duration-300 ease-in-out",
            {
              "scale-100": isModalOpen
            }
          )}
        >
          <NewsHeading className="hidden md:block text-white pointer-events-none absolute -right-20 -top-16 w-full h-auto " />
          <Watercolor color="black"
                      className="z-0 opacity-[0.05] transform rotate-[270deg] w-[500px] absolute -left-10 top-[-520px] " />
          <Watercolor color="black"
                      className="z-0 opacity-10 transform rotate-[260deg] w-[500px] absolute -left-10 bottom-[-555px]" />
          <button
            className="absolute top-2 left-2 -translate-y-full text-5xl md:text-4xl text-white font-bold p-2"
            onClick={closeModal}>&times;</button>
          <div className="overflow-hidden relative">
            <div>
              <div className="font-semibold  leading-none mb-4 text-lg md:text-2xl"> Neue Preise ab 2024</div>
              <div className="rich-text md:text-lg">
                <p>
                  Hallo Peeps, ab 2024 ist es leider auch bei uns soweit. Wir müssen unsere Preise anpassen.
                </p>
                <p>
                  Damit du nicht verwundert bist, wenn du einen Termin für das neue Jahr buchst, und es dann auf einmal
                  kostet als angezeigt, haben wir <a href="#">hier</a> eine kleine Übersicht für dich.
                </p>
                <p>
                  Wir freuen uns auch 2024 auf dich, deinen Mut und deine Haare!
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
