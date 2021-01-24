import React, { Component } from 'react'
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class Impressum extends Component {
  state = {
    sunbau: {},
    menuItem: {selectedItem:7}
  }
  getSunbau() {
    this.setState({sunbau : JsonData})
  }

  componentDidMount() {
    this.getSunbau();
  }
  render() {
    return (
      <div>
        <Headernavigation data={this.state.menuItem}/>
        <br/>{" "}
        <br/>{" "}
        <br/>{" "}
        <div id="datenschutz">
          <div className="container">
            <h2>Datenschutzerklärung</h2>
            {/* <h3>Hinweise zur Datenverarbeitung im Zusammenhang mit Google Analytics</h3> */}
            <div className="row">
              <div className="col-md-8 col-md-offset-0">
                <p>
                  Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Ireland limited. Wenn der Verantwortliche für die Datenverarbeitung auf dieser Website außerhalb des Europäischen Wirtschaftsraumes oder der Schweiz sitzt, dann erfolgt die Google Analytics Datenverarbeitung durch Google LLC. Google LLC und Google Ireland Limited werden nachfolgend "Google" genannt. Bei der Verwendung von Google Analytics wird die Datenverarbeitung technisch durch Jimdo erbracht. Insoweit wird hiermit auf die Datenschutzhinweise von Jimdo verwiesen. Die Jimdo GmbH (Jimdo GmbH, Stresemannstrasse 375, 22761 Hamburg Datenschutz@jimdo.com) sowie der Betreiber dieser Website tragen eine gemeinsam Verantwortung für die Datenverarbeitung in Zusammenhang mit Google Analytics auf dieser Website.
                </p>
                <p>
                  Google Analytics verwendet sog. „Cookies“, Textdateien, die auf dem verwendeten Gerät gespeichert werden und die eine Analyse der Benutzung der Website durch den Seitenbesucher ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google übertragen und dort gespeichert.
                </p>
                <p>
                  Google Analytics wird ausschließlich mit der Erweiterung "_anonymizeIp()" auf dieser Website verwendet. Diese Erweiterung stellt eine Anonymisierung der IP-Adresse durch Kürzung sicher und schließt eine direkte Personenbeziehbarkeit aus. Durch die Erweiterung wird die IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt. Die im Rahmen von Google Analytics von dem entsprechenden Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
                </p>
                <p>
                  Im Auftrag von Jimdo und dem Seitenbetreiber wird Google die anfallenden Informationen benutzen, um die Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen Jimdo und dem Seitenbetreiber gegenüber zu erbringen (Art. 6 Abs. 1 lit. f DSGVO). Das berechtigte Interesse an der Datenverarbeitung liegt in der Optimierung dieser Website, der Analyse der Benutzung der Website und der Anpassung der Inhalte, die durch die Bereitstellung der Statistikfunktionen von Jimdo ermöglicht wird. Die Interessen der Nutzer werden durch die Pseudonymisierung hinreichend gewahrt.
                </p>
                <p>
                  Google LLC. bietet eine Garantie auf Basis der Standardvertragsklauseln ein angemessenes Datenschutzniveau einzuhalten. Die gesendeten und mit Cookies, Nutzerkennungen (z. B. User-ID) oder Werbe-IDs verknüpften Daten werden nach 50 Monaten automatisch gelöscht. Die Löschung von Daten, deren Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im Monat.
                </p>
                <p>
                  Die Erfassung durch Google Analytics kann verhindert werden, indem der Seitenbesucher die Cookie-Einstellungen für diese Website anpasst. Der Erfassung und Speicherung der IP-Adresse und der durch Cookies erzeugten Daten kann außerdem jederzeit mit Wirkung für die Zukunft widersprochen werden. Das entsprechende Browser- Plugin kann unter dem folgenden Link heruntergeladen und installiert werden: https://tools.google.com/dlpage/gaoptout.
                </p>
                <p>
                  Der Seitenbesucher kann die Erfassung durch Google Analytics auf dieser Webseite verhindern, indem er auf folgenden Link klickt. Es wird ein Opt-Out-Cookie gesetzt, der die zukünftige Erfassung der Daten beim Besuch dieser Website verhindert.
                </p>
                <p>
                  Wenn Link geklickt: Der Seitenbesucher hat der Erfassung von Daten mittels Google Analytics auf dieser Webseite widersprochen.
                </p>
                <p>
                  Nähere Informationen zu den Google Nutzungsbedingungen und Datenschutz finden sich unter den Google Analytics Bedingungen bzw. unter der Google Analytics Übersicht.
                </p>
                <p>
                  Gemäß der einschlägigen Gesetzgebung und der DSGVO hat Seitenbesucher in Bezug auf seine personenbezogenen Daten, die über diese Google Analytics Datenverarbeitung verarbeitet werden, bestimmte Rechte. Insbesondere hat er ein Recht auf Auskunft, Berichtigung, Datenübertragbarkeit bzw. Löschung seiner Daten und ein Recht auf Datenübertragbarkeit. Der Seitenbesucher hat bezüglich bestimmter Verarbeitungen seiner Daten auch das Recht auf Widerspruch. Zur Wahrnehmung dieser Betroffenenrechte bezüglich der Google Analytics Datenverarbeitung auf dieser Seite, kann sich ein Betroffener(Seitenbesucher) jederzeit an Jimdo(Jimdo GmbH datenschutz@jimdo.com) oder den Seitenbetreiber wenden.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footernavigation data={this.state.menuItem} />
      </div>
    );
  }
}

export default Impressum;
