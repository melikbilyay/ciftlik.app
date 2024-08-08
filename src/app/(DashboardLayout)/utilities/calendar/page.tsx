"use client";

import React, { useState } from "react";
import { Calendar, momentLocalizer, Event, ToolbarProps } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Card, Typography, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

moment.locale("tr");
const localizer = momentLocalizer(moment);

// Özelleştirilmiş Toolbar Bileşeni
const CustomToolbar: React.FC<ToolbarProps> = (toolbar) => {



    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>

        </Box>
    );
};

const CalendarPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [openEventDialog, setOpenEventDialog] = useState(false);
    const [newEvent, setNewEvent] = useState<{ title: string; start: Date; end: Date }>({ title: "", start: new Date(), end: new Date() });

    const handleSelectSlot = ({ start, end }: { start: Date; end: Date }) => {
        setNewEvent({ ...newEvent, start, end });
        setOpenEventDialog(true);
    };

    const handleAddEvent = () => {
        setEvents([...events, newEvent]);
        setOpenEventDialog(false);
    };

    return (
        <Box p={4}>
            <Card>
                <Typography variant="h4" component="h2" textAlign="center" m={2}>
                     Takvim
                </Typography>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    selectable
                    onSelectSlot={handleSelectSlot}
                    components={{
                        toolbar: CustomToolbar,
                    }}
                />
            </Card>

            <Dialog open={openEventDialog} onClose={() => setOpenEventDialog(false)}>
                <DialogTitle>Yeni Etkinlik Ekle</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Etkinlik Başlığı"
                        fullWidth
                        value={newEvent.title}
                        onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenEventDialog(false)} color="primary">
                        İptal
                    </Button>
                    <Button onClick={handleAddEvent} color="primary">
                        Ekle
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CalendarPage;
