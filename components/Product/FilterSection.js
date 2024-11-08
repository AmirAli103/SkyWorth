import React, { useState, useEffect } from 'react';
import { Typography, Checkbox, FormControlLabel, Box } from '@mui/material';
import filters from './Filter.json';
import { useRouter } from 'next/router';

const FilterSection = ({ onFilterChange }) => {
    const router = useRouter();
    const { title } = router.query;
    const [selectedFilters, setSelectedFilters] = useState({
        resolution: [],
        productSize: [],
        feature: [],
    });

    const handleFilterChange = (category, value) => {
        const updatedFilters = { ...selectedFilters };
        if (updatedFilters[category].includes(value)) {
            updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
        } else {
            updatedFilters[category].push(value);
        }

        setSelectedFilters(updatedFilters);
        onFilterChange(updatedFilters);
    };

    useEffect(() => {
        if (title && filters.resolution.includes(title?.toUpperCase())) {
            const updatedFilters = { ...selectedFilters, resolution: [title?.toUpperCase()] };
            setSelectedFilters(updatedFilters);
            onFilterChange(updatedFilters);
        }
    }, [title]);

    return (
        <Box marginLeft={{ md: '0px', lg: '30px' }}>
            <Typography sx={{ fontSize: 20, fontWeight: '250', fontFamily: 'Kanit', mb: 1 }}>
                Screen Resolution
            </Typography>
            {filters.resolution.map((resolution) => (
                <FormControlLabel
                    key={resolution}
                    style={{ display: 'flex' }}
                    control={
                        <Checkbox
                            checked={selectedFilters.resolution.includes(resolution)}
                            onChange={() => handleFilterChange('resolution', resolution)}
                            size='small'
                            sx={{ padding: '4px' }}
                        />
                    }
                    label={<Typography sx={{ fontSize: 18, fontFamily: 'Kanit', fontWeight: '300' }}>
                        {resolution}
                    </Typography>}
                    sx={{ display: 'block' }}
                />
            ))}

            <Typography sx={{ fontSize: 20, fontWeight: '250', fontFamily: 'Kanit', mb: 1, mt: 2 }}>
                Product Size
            </Typography>
            {filters.productSize.map((type) => (
                <FormControlLabel
                    key={type}
                    style={{ display: 'flex' }}
                    control={
                        <Checkbox
                            checked={selectedFilters.productSize.includes(type)}
                            onChange={() => handleFilterChange('productSize', type)}
                            size='small'
                            sx={{
                                padding: '4px',
                            }}
                        />
                    }
                    label={
                        <Typography sx={{ fontSize: 18, fontFamily: 'Kanit', fontWeight: '300' }}>
                            {type}
                        </Typography>
                    }
                    sx={{ display: 'block' }}
                />
            ))}

            <Typography sx={{ fontSize: 20, fontWeight: '250', fontFamily: 'Kanit', mb: 1, mt: 2 }}>
                Features
            </Typography>
            {filters.feature.map((feature) => (
                <FormControlLabel
                    key={feature}
                    style={{ display: 'flex',alignItems:'self-start' }}
                    control={
                        <Checkbox
                            checked={selectedFilters.feature.includes(feature)}
                            onChange={() => handleFilterChange('feature', feature)}
                            size='small'
                            sx={{ padding: '4px' }}
                        />
                    }
                    label={<Typography sx={{ fontSize: 18, fontFamily: 'Kanit', fontWeight: '300' }}>
                        {feature}
                    </Typography>}
                    sx={{ display: 'block', fontSize: 20, fontFamily: "Kanit" }}
                />
            ))}
        </Box>
    );
};

export default FilterSection;
