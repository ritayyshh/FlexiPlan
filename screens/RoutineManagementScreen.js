import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const routines = [
  { id: '1', startDate: '2024-10-01', endDate: '2024-10-07', data: 'Work and gym routine' },
  { id: '2', startDate: '2024-10-08', endDate: '2024-10-14', data: 'Study and exercise routine' },
];

const RoutineManagement = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Routines</Text>
      </View>
      <FlatList
        data={routines}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.routine} onPress={() => alert(`Details for ${item.data}`)}>
            <View style={styles.iconContainer}>
              <Icon name="calendar-outline" size={24} color="#00008B" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.routineTitle}>{item.data}</Text>
              <Text style={styles.dateText}>Start: {item.startDate}</Text>
              <Text style={styles.dateText}>End: {item.endDate}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => alert('Create New Routine')}>
        <Icon name="add-circle-outline" size={24} color="white" />
        <Text style={styles.buttonText}>Add Routine</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f2f5'
  },
  header: {
    backgroundColor: '#00008B',
    width: '100%', // Ensures it stretches across the screen
    paddingTop: 40, // Adjust this to set the header height
    paddingBottom: 20, // Bottom padding for the header
    paddingHorizontal: 20, // Adds side padding
    justifyContent: 'center', // Vertically center the text
    alignItems: 'center', // Horizontally center the text
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 20,
  },
  headerText: {
    color: 'white',
    fontSize: 28, // Adjust font size for better visual hierarchy
    fontWeight: 'bold',
    textAlign: 'center', // Ensure the text is centered
  },
  listContent: { paddingBottom: 20 },
  routine: { 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  routineTitle: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#00008B'
  },
  dateText: { 
    color: '#666',
    marginTop: 5
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00008B',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
    fontSize: 16,
  },
});

export default RoutineManagement;