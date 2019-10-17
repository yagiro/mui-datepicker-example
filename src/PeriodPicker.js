import React from 'react';

import StaticDatePicker from './StaticDatePicker';

const PeriodPicker = () => {
    /**
     * MuiPickersUtilsProvider is used (in index.js) to provide MomentUtils
     */
    return (
        <div className="period-picker-container">
            <StaticDatePicker/>
            {/* <StaticDatePicker/> */}
        </div>
    );
};

export default PeriodPicker;