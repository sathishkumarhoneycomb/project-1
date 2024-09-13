import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const BFPaymentModalWindow = ({show, handleClose}) => {

    const [monthlyFeeAmount, setMonthlyFeeAmount] = useState(10000)

    const handleMonthlyFeeChange = (e) => {
        setMonthlyFeeAmount(e.target.value);
    }


    return (
        <Modal
        show={show}
        size="lg"
        dialogClassName="annual_payment_modal"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

      >
        <Modal.Header closeButton
        className='text-white blue-gradient rounded-0'
        >
          <Modal.Title> Payment ( Test user )</Modal.Title>
        </Modal.Header>
        <Modal.Body >
                <form >
                    {/* header  */}
                    <header className='mb-4'>
                        <ul className='list-unstyled row row-gap-3 '>
                            <li className='col-sm-6 col-lg-3 d-flex gap-3 gap-md-2 gap-sm-3 align-items-center '> 
                                <input type='radio' name='monthlyFee' className='scale_5' value={10000} onChange={handleMonthlyFeeChange} defaultChecked /> 
                                <span> Pay for 1 month </span>    
                            </li>
                            <li className='col-sm-6 col-lg-3 d-flex gap-3 gap-md-2 gap-sm-3 align-items-center'>
                                 <input type='radio' name='monthlyFee' className='scale_5'  value={30000} onChange={handleMonthlyFeeChange} />  
                                <span> Pay for 3 month </span>
                            </li>
                            <li className='col-sm-6 col-lg-3 d-flex gap-3 gap-md-2 gap-sm-3 align-items-center '> 
                                <input type='radio' name='monthlyFee' className='scale_5' value={60000}  onChange={handleMonthlyFeeChange} /> 
                                <span> Pay for 6 months </span>
                             </li>
                            <li className='col-sm-6 col-lg-3 d-flex gap-3 gap-md-2 gap-sm-3 align-items-center'> 
                                <input type='radio' name='monthlyFee' className='scale_5' value={120000} onChange={handleMonthlyFeeChange} /> 
                                <span> Pay for 12 months </span>
                            </li>
                        </ul>
                    </header>
                    {/* 1st row  */}
                    <div className='d-block d-md-flex justify-content-between gap-4 mb-4'>
                        <div className='form-group flex-fill mb-md-0 mb-4'>
                            <label className='form-label'> Amount(INR) </label>
                            <input type='number' 
                            name='amount' 
                            className='form-control'
                            value={monthlyFeeAmount}
                            readOnly
                             />
                        </div>
                        <div className='form-group flex-fill'>
                            <label className='form-label'> Facilitation Charge ( INR ) </label>
                            <input type='number' 
                            name='facilitationCharge' 
                            className='form-control'
                            value="0"
                             />
                        </div>
                    </div>
                    {/* 2nd row  */}
                    <div className='row  mb-4'>
                        <div className='form-group col-lg-4 mb-4 mb-lg-0'>
                            <label className='form-label'> Late payment(INR)</label>
                            <input type='number' 
                            name='latePayment' 
                            className='form-control'
                            value="0"
                            readOnly
                             />
                        </div>
                        <div className='form-group col-lg-4  mb-4 mb-lg-0'>
                            <label className='form-label'> Facilitation Late Payment ( INR ) </label>
                            <input type='number' 
                            name='totalAmount' 
                            className='form-control'
                            value="0"
                            readOnly
                             />
                        </div>
                        <div className='form-group col-lg-4  '>
                            <label className='form-label'> Total Amount to Pay(INR)</label>
                            <input type='number' 
                            name='totalAmount' 
                            className='form-control'
                            value="10000"
                            readOnly
                             />
                        </div>
                    </div>
                    {/* 3rd row  */}
                    <div className='row'>
                        <div className='form-group col-lg-4 mb-lg-0 mb-4 '>
                            <label className='form-label'> Payment Date </label>
                            <input type='date' name='paymentDate' className='form-control' />
                        </div>
                        <div className='form-group  col-lg-4 mb-lg-0 mb-4 '>
                            <label className='form-label '> Payment Type</label>
                            <select className='form-control'>
                                <option value="online" selected > Online </option>
                            </select>
                        </div>
                        <div className='form-group  col-lg-4'>
                            <label className='form-label'> Reference Number: </label>
                            <input type='number' value="3939949599" name='referenceNumber' className='form-control' />
                        </div>
                        
                    </div>
                </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default BFPaymentModalWindow;
