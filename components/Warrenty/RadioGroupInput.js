import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';

const RadioGroupInput = ({ label, name, value, onChange,required, options }) => (
  <FormControl component="fieldset" sx={{ marginBottom: '20px' }}>
    <Typography variant="body2" sx={{ marginBottom: '4px',fontSize:16,fontFamily:'Kanit',fontWeight:'400', }}>
            {label}
            {required && <span style={{ color: 'red' }}> *</span>}
        </Typography>
    <RadioGroup name={name} value={value} onChange={onChange} sx={{ display: 'flex', flexDirection: 'column', }}>
      {options.map((option) => (
        <FormControlLabel 
          key={option.value} 
          value={option.value} 
          control={<Radio size='small' sx={{ color: 'black', '&.Mui-checked': { color: '#0069c8' } }} />} 
          label={
            <Typography sx={{ fontFamily: 'Kanit', fontWeight: '400', color: 'black' }}>
              {option.label}
            </Typography>
          }
          sx={{ color: 'black' }}
        />
      ))}
    </RadioGroup>
  </FormControl>
);

export default RadioGroupInput;
