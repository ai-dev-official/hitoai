import React, { useState } from 'react';
import "./Simulator.css";
import { IoMdClose } from "react-icons/io";

const SimulatorModal = ({ closeModal, isModalOpen }) => {
    const [eircode, setEircode] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [temperature, setTemperature] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Form data for submission or further processing
        const formData = {
            eircode,
            date,
            time,
            temperature
        };

        console.log('Form Data:', formData);

    };

    return (
        <div className={`simulator__modal__wrapper ${isModalOpen ? 'open' : ''}`}>
            <div className="simulator__modal__content">
                <h2 className="simulator__modal__title">AI Activation Calculator</h2>
                <IoMdClose size={24} onClick={closeModal} className="simulator__modal__close" />

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="eircode">Your Eircode</label>
                        <input
                            type="text"
                            className="form-control"
                            id="eircode"
                            name="eircode"
                            value={eircode}
                            onChange={(e) => setEircode(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            name="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input
                            type="time"
                            className="form-control"
                            id="time"
                            name="time"
                            step="1"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="temperature">Ideal Temperature (°C)</label>
                        <input
                            type="number"
                            className="form-control"
                            id="temperature"
                            name="temperature"
                            value={temperature}
                            onChange={(e) => setTemperature(e.target.value)}
                            required
                        />
                    </div>

                    <a type="submit" className="btn">Calculate Activation</a>
                </form>
            </div>
        </div>
    );
}

export default SimulatorModal;
