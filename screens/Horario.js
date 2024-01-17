import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Horario() {
  const [events, setEvents] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [eventType, setEventType] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setSelectedDate(date.toISOString().split('T')[0]);
  };

  const addEvent = () => {
    if (selectedDate && eventType) {
      setEvents((prevEvents) => [
        ...prevEvents,
        { id: Math.random().toString(), date: selectedDate, eventType },
      ]);
      setSelectedDate('');
      setEventType('');
    } else {
      alert('Por favor, seleccione la fecha y el tipo de evento.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Agregar Evento</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Seleccionar Fecha"
        value={selectedDate}
        onTouchStart={showDatePicker}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          padding: 10,
        }}
        placeholder="Tipo de Evento"
        value={eventType}
        onChangeText={(text) => setEventType(text)}
      />
      <Button title="Agregar Evento" onPress={addEvent} />
      <Text style={{ fontSize: 20, marginTop: 20 }}>Lista de Eventos</Text>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Fecha: {item.date}</Text>
            <Text>Tipo de Evento: {item.eventType}</Text>
          </View>
        )}
      />
    </View>
  );
}
