import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../store/resumeSlice';

const Experience = ({ onNext, onBack }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.resume);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* მარცხენა მხარე: გამოცდილების ფორმა */}
      <div style={{ flex: 1, padding: '40px', borderRight: '1px solid #ddd', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>გამოცდილება</h2>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>2/3</span>
        </div>
        <hr style={{ border: '0.5px solid #ccc', marginBottom: '30px' }} />

        {/* თანამდებობა */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', display: 'block' }}>თანამდებობა</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <small style={{ color: '#666', display: 'block', marginTop: '4px' }}>მინიმუმ 2 სიმბოლო</small>
        </div>

        {/* დამსაქმებელი */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', display: 'block' }}>დამსაქმებელი</label>
          <input
            type="text"
            name="employer"
            value={formData.employer}
            onChange={handleChange}
            placeholder="დამსაქმებელი"
            style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <small style={{ color: '#666', display: 'block', marginTop: '4px' }}>მინიმუმ 2 სიმბოლო</small>
        </div>

        {/* თარიღები */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold', display: 'block' }}>დაწყების რიცხვი</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold', display: 'block' }}>დამთავრების რიცხვი</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
        </div>

        {/* აღწერა */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold', display: 'block' }}>აღწერა</label>
          <textarea
            name="experienceDescription"
            value={formData.experienceDescription}
            onChange={handleChange}
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            rows={4}
            style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
          />
        </div>

        {/* მეტი გამოცდილების დამატების ღილაკი */}
        <div style={{ marginBottom: '40px' }}>
          <button
            type="button"
            style={{
              backgroundColor: '#2a7bf6',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            მეტი გამოცდილების დამატება
          </button>
        </div>

        {/* ღილაკები: უკან და შემდეგი */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            onClick={onBack}
            style={{
              backgroundColor: '#6b7080',
              color: '#fff',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            უკან
          </button>

          <button
            onClick={onNext}
            style={{
              backgroundColor: '#6b7080',
              color: '#fff',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            შემდეგი
          </button>
        </div>
      </div>

      {/* მარჯვენა მხარე: რეზიუმეს ცოცხალი პრევიუ */}
      <div style={{ flex: 1, padding: '40px', backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '400px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', position: 'relative' }}>
          
          {/* ფოტო */}
          <div style={{ position: 'absolute', top: '30px', right: '30px', width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#eee' }}>
            {formData.image && <img src={formData.image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          </div>

          <h2 style={{ color: '#e60000', marginBottom: '5px' }}>{formData.firstName} {formData.lastName}</h2>
          {formData.email && <p style={{ fontSize: '13px', color: '#555', margin: '2px 0' }}>✉ {formData.email}</p>}
          {formData.phone && <p style={{ fontSize: '13px', color: '#555', margin: '2px 0' }}>📞 {formData.phone}</p>}

          {/* გამოცდილების სექცია პრევიუში */}
          {(formData.position || formData.employer) && (
            <div style={{ marginTop: '25px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
              <h4 style={{ margin: '0 0 10px 0', color: '#1a1a1a' }}>გამოცდილება</h4>
              <p style={{ fontWeight: 'bold', margin: '0 0 4px 0', fontSize: '14px' }}>
                {formData.position} {formData.employer && `, ${formData.employer}`}
              </p>
              {(formData.startDate || formData.endDate) && (
                <p style={{ fontSize: '12px', color: '#888', margin: '0 0 8px 0' }}>
                  {formData.startDate} - {formData.endDate}
                </p>
              )}
              {formData.experienceDescription && (
                <p style={{ fontSize: '13px', color: '#555', lineHeight: '1.4' }}>{formData.experienceDescription}</p>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Experience;