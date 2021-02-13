import React, { Component } from 'react'
import Headernavigation from './headernavigation';
import Footernavigation from './footernavigation';
import JsonData from '../data/data.json';
import '../App.css';

export class Impressum extends Component {
  state = {
    sunbau: {}
  }
  navState = {
    menuItem: {selectedItem:6, menuType:3}
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
        {this.props.data ?  this.props.data.menuType!==0 ? 
          <div>
            <Headernavigation data={this.props.data}/> 
            <br/>{" "}
            <br/>{" "}
            <br/>{" "}
          </div>
          : 
            "" 
          : 
          <div>
            <Headernavigation data={this.navState.menuItem}/>
            <br/>{" "}
            <br/>{" "}
            <br/>{" "}
          </div>
        }
        <div id="impressum" class="pageSection impressumSection">
          <div className="container">
            <h2>Impressum</h2>
            <div className="row">
              <div className="col-md-8 col-md-offset-0">
                <p>
                  In den meisten Ländern der Welt ist gesetzlich vorgeschrieben, dass Websites, die nicht ausschließlich privaten oder persönlichen Zwecken dienen, ein rechtsgültiges Impressum enthalten müssen. Das gilt auch für Websites, die einen Blog oder journalistische Texte veröffentlichen.
                </p>
                <p>
                  Der Name der für den Inhalt verantwortlichen Person muss im Impressum genannt werden, mit Adresse und einer Möglichkeit der Kontaktaufnahme. Das kann zum Beispiel eine Telefonnummer oder eine Emailadresse sein. Darüberhinaus können je nach Rechtslage in deinem Land weitere Informationen nötig sein. Bitte ziehe einen lokalen Experten zurate, um dich zu informieren, wie dein Impressum genau aussehen muss.
                </p>
                <br/>{" "}
                <br/>{" "}
                <br/>{" "}
                <p>
                  Bildnachweis: <a href="http://unsplash.com/photos/l1xuT0eR56E?utm_source=jimdo_dolphin&amp;utm_medium=referral" target="_blank" rel="noreferrer noopener">Norbert Levajsics</a> on <a href="https://unsplash.com/?utm_source=jimdo_dolphin&amp;utm_medium=referral" target="_blank" rel="noreferrer noopener">Unsplash</a>, <a href="https://unsplash.com/photos/ZgmGq_eFmUs?utm_source=jimdo_dolphin&amp;utm_medium=referral" target="_blank" rel="noreferrer noopener">Jamar  Penny</a> on <a href="https://unsplash.com/?utm_source=jimdo_dolphin&amp;utm_medium=referral" target="_blank" rel="noreferrer noopener">Unsplash</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {this.props.data ?  this.props.data.menuType!==0 ? <Footernavigation data={this.props.data}/> :"" : <Footernavigation data={this.navState.menuItem}/>}
      </div>
    );
  }
}

export default Impressum;
