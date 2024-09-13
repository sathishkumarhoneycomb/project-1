import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GMCPaymentModalWindow = ({show, handleClose}) => {
    return (
        <>
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
      <Modal.Title> GMC  Payment ( Test user )</Modal.Title>
    </Modal.Header>
    <Modal.Body >
            <form >
                {/* 1st row  */}
                <div className='row mb-4'>
                <div className='form-group '>

                            <label className='form-label'> Year </label>
                            
                            <select name="annual_payment_year" id="annual_payment_year" class="form-control " >
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024" selected="">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                    <option value="2028">2028</option>
                                    <option value="2029">2029</option>
                                    <option value="2030">2030</option>
                                    <option value="2031">2031</option>
                                    <option value="2032">2032</option>
                                    <option value="2033">2033</option>
                                    <option value="2034">2034</option>
                            </select>
                        </div>
                </div>
                {/* 2nd row  */}
                <div className='row row-gap-4 mb-4'>
                    
                    <div className='form-group col-lg-6 mb-md-0 mb-4'>
                            <label className='form-label'> Amount(INR) </label>
                            <input type='number' 
                            name='amount' 
                            className='form-control'
                            value="1000"
                            readOnly
                            />
                    </div>

                    <div className='form-group col-lg-6 mb-lg-0 mb-4 '>
                        <label className='form-label'> Payment Date </label>
                        <input type='date' name='paymentDate' className='form-control' />
                    </div>

                </div>
                {/* 3rd row  */}
                <div className='row  mb-4'>
                <div className='form-group  col-lg-6 mb-lg-0 mb-4'>
                        <label className='form-label '> Payment Type</label>
                        <select className='form-control'>
                            <option value="online" selected > Online </option>
                        </select>
                    </div>
                    <div className='form-group  col-lg-6'>
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
    </>
    );
}

export default GMCPaymentModalWindow;
