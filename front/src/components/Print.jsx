import React from 'react';
import { PrintComp } from './PrintComp';
import { PrintVar } from './PrintVar';
import PrintButton from './UI/button/PrintButton';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';


export class Print extends React.PureComponent {
    constructor(props){
        super(props)
        this.props = props.props
    }
    back = () => {
      this.props.setPrint({})
    }
    checkPress(e, step){
      if(e.key === 'Enter'){
        step()
      }
    }
    clickPrint(step){
        step()
        this.back()
    }
    documentSheet(){
      if(this.props.print.format === 'order'){
        return <PrintComp props={this.props} ref={el => (this.componentRef = el)}/>
      }
      else if(this.props.print.format === 'var'){
        return <PrintVar props={this.props} ref={el => (this.componentRef = el)}/>
      }
    }

  render() {
    return (
      <div>
        <ReactToPrint bodyClass="print-agreement" content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <div>
              <PrintButton onClick={this.back}  style={{width: 775}}>Отмена</PrintButton>
              <PrintButton autoFocus={true} type="primary" style={{width: 775}} onClick={(e) => this.clickPrint(handlePrint)} onKeyPress={(e) => this.checkPress(e, handlePrint)}>Print</PrintButton>
              {this.documentSheet()}
              </div>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
      </div>
    )
  }
}



// function refreshPage(){
//     window.location.reload()
// }
