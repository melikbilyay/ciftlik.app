'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Typography, Grid, Card, CardContent, TextField, Button, Paper } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';

interface FeedbackForm {
    name: string;
    email: string;
    feedback: string;
}

const FeedbackFormPage = () => {
    const [form, setForm] = useState<FeedbackForm>({
        name: '',
        email: '',
        feedback: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name as string]: value as string
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Feedback submitted:', form);
        setForm({
            name: '',
            email: '',
            feedback: ''
        });
    };

    return (
        <PageContainer title="Geribildirim Formu" description="Sistemi geliştirmek için geribildirimlerinizi bize iletin.">

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Geribildirim Formu
                    </Typography>
                    <Card>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="name"
                                            label="Adınız"
                                            fullWidth
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="email"
                                            label="E-posta Adresiniz"
                                            type="email"
                                            fullWidth
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            name="feedback"
                                            label="Geribildirim"
                                            fullWidth
                                            multiline
                                            rows={6}
                                            value={form.feedback}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary">
                                            Gönder
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </PageContainer>
    );
};

export default FeedbackFormPage;
