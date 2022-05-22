import React from 'react';
import {PlainTextPage} from "../components/PlainTextPage";


const Impressum = () => {

  return (
	  <PlainTextPage heading="Impressum">
          <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
          <p>Sarah Scherer<br />
              Shearer Creative Studio<br />
              Nordwall 60<br />
              47798 Krefeld</p>

          <h2>Kontakt</h2>
          <p>Telefon: +49 (0) 123 44 55 66<br />
              E-Mail: hello@shearer.studio</p>

          <h2>Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:<br />
              DE999999999</p>

          <h2>Aufsichtsbeh&ouml;rde</h2>
          <p>Handwerkskammer D&uuml;sseldorf<br />
              Georg-Schulhoff-Platz 1,<br />
              40221 D&uuml;sseldorf</p>
          <p><a href="https://www.hwk-duesseldorf.de/" target="_blank" rel="noopener noreferrer">https://www.hwk-duesseldorf.de/</a></p>

          <h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
          <p><strong>Name und Sitz des Versicherers:</strong><br />
              Beispiel Versicherung AG<br />
              Musterweg 10<br />
              90210 Musterstadt</p>
          <p><strong>Geltungsraum der Versicherung:</strong><br />Deutschland</p>

          <h2>Redaktionell verantwortlich</h2>
          <p>Sarah Scherer<br />
              Nordwall 60<br />
              47798 Krefeld</p>

          <h2>EU-Streitschlichtung</h2>
          <p>Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

          <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
          <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

          <p>Quelle: <a href="https://www.e-recht24.de/impressum-generator.html">https://www.e-recht24.de/impressum-generator.html</a></p>
      </PlainTextPage>
  );
};

export default Impressum;