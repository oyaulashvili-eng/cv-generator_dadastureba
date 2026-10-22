import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateField } from '../store/resumeSlice';

const PersonalInfo = ({ onNext }) => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.resume);

  const isEmailValid = formData.email ? formData.email.endsWith('@redberry.ge') : true;
  const isFirstNameValid = formData.firstName ? formData.firstName.length >= 2 : true;
  const isLastNameValid = formData.lastName ? formData.lastName.length >= 2 : true;

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      dispatch(updateField({ field: 'image', value: imageUrl }));
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* მარცხენა მხარე: ფორმა */}
      <div style={{ flex: 1, padding: '40px', borderRight: '1px solid #ddd', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>პირადი ინფო</h2>
          <span style={{ fontSize: '18px', fontWeight: 'bold' }}>1/3</span>
        </div>
        <hr style={{ border: '0.5px solid #ccc', marginBottom: '30px' }} />

        {/* სახელი და გვარი */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>სახელი</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName || ''}
              onChange={handleChange}
              placeholder="ანზორ"
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '8px',
                borderRadius: '4px',
                border: `1px solid ${formData.firstName && !isFirstNameValid ? 'red' : '#ccc'}`
              }}
            />
            <small style={{ color: '#666', display: 'block', marginTop: '4px' }}>მინიმუმ 2 ასო, ქართული ასოები</small>
          </div>

          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: 'bold' }}>გვარი</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName || ''}
              onChange={handleChange}
              placeholder="მუმლაძე"
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '8px',
                borderRadius: '4px',
                border: `1px solid ${formData.lastName && !isLastNameValid ? 'red' : '#ccc'}`
              }}
            />
            <small style={{ color: '#666', display: 'block', marginTop: '4px' }}>მინიმუმ 2 ასო, ქართული ასოები</small>
          </div>
        </div>

        {/* ფოტოს ატვირთვა */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <span style={{ fontWeight: 'bold' }}>პირადი ფოტოს ატვირთვა</span>
          <label 
            htmlFor="photo-upload" 
            style={{
              backgroundColor: '#0e80bf',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            ატვირთვა
          </label>
          <input
            id="photo-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
          />
        </div>

        {/* ჩემ შესახებ */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold' }}>ჩემ შესახებ (არასავალდებულო)</label>
          <textarea
            name="aboutMe"
            value={formData.aboutMe || ''}
            onChange={handleChange}
            placeholder="ზოგადი ინფო შენ შესახებ"
            rows={4}
            style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc', resize: 'vertical' }}
          />
        </div>

        {/* ელ.ფოსტა */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ fontWeight: 'bold' }}>ელ.ფოსტა</label>
          <input
            type="email"
            name="email"
            value={formData.email || ''}
            onChange={handleChange}
            placeholder="anzor666@redberry.ge"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '8px',
              borderRadius: '4px',
              border: `1px solid ${formData.email && !isEmailValid ? 'red' : '#ccc'}`
            }}
          />
          <small style={{ color: '#666', display: 'block', marginTop: '4px' }}>უნდა მთავრდებოდეს @redberry.ge-ით</small>
        </div>

        {/* მობილურის ნომერი */}
        <div style={{ marginBottom: '30px' }}>
          <label style={{ fontWeight: 'bold' }}>მობილურის ნომერი</label>
          <input
            type="text"
            name="phone"
            value={formData.phone || ''}
            onChange={handleChange}
            placeholder="+995 551 12 34 56"
            style={{ width: '100%', padding: '10px', marginTop: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <small style={{ color: '#666', display: 'block', marginTop: '4px' }}>უნდა აკმაყოფილებდეს ქართული ნომრის ფორმატს</small>
        </div>

        {/* შემდეგი ღილაკი */}
        <div style={{ textAlign: 'right' }}>
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

      {/* მარჯვენა მხარე: ცოცხალი პრევიუ */}
      <div style={{ flex: 1, padding: '40px', backgroundColor: '#fafafa', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '400px', background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', position: 'relative' }}>
          
          <div style={{ position: 'absolute', top: '30px', right: '30px', width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', backgroundColor: '#eee' }}>
            {formData.image && <img src={formData.image} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          </div>

          <h2 style={{ color: '#e60000', marginBottom: '5px' }}>{formData.firstName} {formData.lastName}</h2>
          {formData.email && <p style={{ fontSize: '13px', color: '#555', margin: '2px 0' }}>✉ {formData.email}</p>}
          {formData.phone && <p style={{ fontSize: '13px', color: '#555', margin: '2px 0' }}>📞 {formData.phone}</p>}

          {formData.aboutMe && (
            <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '15px' }}>
              <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>ჩემ შესახებ</h4>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: '1.4' }}>{formData.aboutMe}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;