import { FormControl, FormLabel, FormControlLabel, Checkbox, Typography } from '@mui/material';

const SingleCheckboxSelectGroup = ({ label, options, selectedValue, onChange, required, textColor }) => {
  const handleCheckboxChange = (option) => {
    onChange(option);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <Typography variant="body2" sx={{ fontSize: 16, fontFamily: 'Kanit', fontWeight: '400' }}>
          {label}
          {required && <span style={{ color: 'red' }}> *</span>}
        </Typography>
      </FormLabel>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '10px',
        }}
      >
        {options?.map((option) => (
          <FormControlLabel
            key={option}
            control={
              <Checkbox
                size="small"
                sx={{ color: 'black' }}
                checked={selectedValue === option}
                onChange={() => handleCheckboxChange(option)}
              />
            }
            label={
              <Typography sx={{ color: textColor || 'black', fontFamily: 'Kanit', fontWeight: '400' }}>
                {option}
              </Typography>
            }
          />
        ))}
      </div>
    </FormControl>
  );
};

export default SingleCheckboxSelectGroup;
