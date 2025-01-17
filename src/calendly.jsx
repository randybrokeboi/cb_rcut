import {Component} from 'react'
import {InlineWidget} from 'react-calendly'
export class Calendly extends Component {
  render(){
    return (
      <div>
        <InlineWidget url="https://calendly.com/randy-semedo/30min" styles={{
          height: '750px'
        }}
                      pageSettings={{
                        backgroundColor: 'e2dfdf',
                        hideEventTypeDetails: false,
                        hideLandingPageDetails: false,
                        primaryColor: '202527',
                        textColor: '202527',
                        hideGdprBanner: true,
                      }}

        />
      </div>
    );
  }
}