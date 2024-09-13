import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { setYear } from 'date-fns';
import { useState } from 'react';

const YearPicker = () => {

  const [selectedDate, setSelectedDate] = useState(new Date().getFullYear().toString());

  return (
    <section className='d-flex align-items-end justify-content-end gap-4 mb-lg-4 mb-5'>
        <div> 
            <button className='btn btn-outline-primary text-uppercase view_history_width'> view payment history  </button>
        </div>
        <div>
            <span className='d-block mb-2'> Year Filter</span>
            <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        showYearPicker
        dateFormat="yyyy"
        className='form-control view_history_width'
      />


        </div>
    

 
    </section>
  );
};

export default YearPicker;