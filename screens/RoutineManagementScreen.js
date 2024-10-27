import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native';

const routines = [
  { id: '1', startDate: '2024-10-01', endDate: '2024-10-07', data: 'Work and gym routine' },
  { id: '2', startDate: '2024-10-08', endDate: '2024-10-14', data: 'Study and exercise routine' },
];

const RoutineManagement = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Routines</Text>
      <FlatList 
        data={routines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.routine} onPress={() => alert(`Details for ${item.data}`)}>
            <Text style={styles.routineTitle}>{item.data}</Text>
            <Text style={styles.dateText}>Start: {item.startDate}</Text>
            <Text style={styles.dateText}>End: {item.endDate}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Add Routine" onPress={() => alert('Create New Routine')} color="#1E90FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f5f5f5' // Light background color
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#333' // Darker color for better contrast
  },
  routine: { 
    backgroundColor: '#ffffff', // White background for routine items
    borderRadius: 10, // Rounded corners
    padding: 15, // Padding for inner content
    marginBottom: 15, // Space between items
    shadowColor: '#000', // Shadow for elevation effect
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2, // Android shadow effect
  },
  routineTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#007BFF' // Blue color for routine title
  },
  dateText: { 
    color: '#666', // Grey color for date text
    marginTop: 5 // Space between title and date
  },
});

export default RoutineManagement;