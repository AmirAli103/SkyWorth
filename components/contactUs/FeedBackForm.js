import { Grid, Box, Button, Typography, Rating } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextInput from './../Warrenty/TextInput';
import CheckboxGroup from './../Warrenty/CheckBoxGroup';
import { motion } from 'framer-motion';
import { brandOptions } from './contactData';

const FeedBackForm = () => {
    const { register, handleSubmit, setValue, formState: { errors }, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <Box sx={{ marginTop: '100px' }}>
            <Box sx={{
                padding: '20px',
                marginTop: '50px',
                margin: '0 auto',
                borderRadius: '8px',
            }} maxWidth={"md"}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} component={motion.div} transition={{ delay: 0.3 }} variants={animationVariants}>
                            <h1 style={{ fontFamily: 'Kanit', fontWeight: '500', textAlign: 'center' }}> Feedback Form</h1>
                        </Grid>
                        <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
                            <TextInput
                                label="Full name as per IC"
                                {...register('fullName', { required: 'Full name is required' })}
                                value={watch('fullName')}
                                onChange={(e) => setValue('fullName', e.target.value)}
                            />
                            {errors.fullName && <Typography color="error">{errors.fullName.message}</Typography>}
                        </Grid>
                        <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.5 }} variants={animationVariants}>
                            <TextInput
                                label="Email address"
                                type="email"
                                {...register('email', { required: 'Email is required' })}
                                value={watch('email')}
                                onChange={(e) => setValue('email', e.target.value)}
                            />
                            {errors.email && <Typography color="error">{errors.email.message}</Typography>}
                        </Grid>
                        <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.3 }} variants={animationVariants}>
                            <TextInput
                                label="Phone/Mobile"
                                type='number'
                                {...register('phone', { required: 'Phone is required' })}
                                value={watch('phone')}
                                onChange={(e) => setValue('phone', e.target.value)}
                            />
                            {errors.phone && <Typography color="error">{errors.phone.message}</Typography>}
                        </Grid>
                        <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 1.3 }} variants={animationVariants}>
                            <TextInput
                                label="Please drop your message here"
                                {...register('comments', { required: 'Comments are required' })}
                                multiline
                                rows={3}
                                sx={{ height: '80px' }}
                                value={watch('comments')}
                                onChange={(e) => setValue('comments', e.target.value)}
                            />
                            {errors.comments && <Typography color="error">{errors.comments.message}</Typography>}
                        </Grid>
                        <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 0.9 }} variants={animationVariants}>
                            <CheckboxGroup
                                label="How did you find out about our brand?"
                                options={brandOptions}
                                {...register('brandSource', { validate: value => value?.length > 0 || 'Select at least one option' })}
                                value={watch('brandSource')}
                                onChange={(e) => setValue('brandSource', e.target.value)}
                            />
                            {errors.brandSource && <Typography color="error">{errors.brandSource.message}</Typography>}
                        </Grid>

                        <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 1.1 }} variants={animationVariants}>
                            <Typography variant="body2" sx={{ marginBottom: '4px', fontSize: 16, fontFamily: 'Kanit', fontWeight: '400', }}>
                                User Friendliness<span style={{ color: 'red' }}> *</span>
                            </Typography>
                            <Rating
                                name="simple-controlled"
                                value={watch('rating') || 0}
                                emptyIcon={<span style={{ color: '#D4D4D4' }}>★</span>}
                                sx={{ marginTop: '5px' }}
                                onChange={(event, newValue) => {
                                    setValue('rating', newValue);
                                }}
                            />
                            {errors.rating && <Typography color="error">{errors.rating.message}</Typography>}
                        </Grid>
                        <Grid item xs={12} component={motion.div} initial="hidden" animate="visible" transition={{ delay: 1.5 }} variants={animationVariants}>
                            <Button type="submit" sx={{
                                background: '#0069CB',
                                height: 59,
                                color: 'white',
                                borderRadius: 0,
                                width: {xs:'40%',md:'30%'},
                                marginBottom: '100px',
                                '&:hover': {
                                    background: '#0069CB',
                                },
                            }} fullWidth>
                                Send your feedback
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Box>
    );
};

export default FeedBackForm;