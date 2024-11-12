import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const hobbies = [
  { id: '1', name: 'Painting', category: 'Art', icon: 'color-palette-outline' },
  { id: '2', name: 'Cycling', category: 'Fitness', icon: 'bicycle-outline' },
  { id: '3', name: 'Photography', category: 'Creative', icon: 'camera-outline' },
  { id: '4', name: 'Yoga', category: 'Wellness', icon: 'fitness-outline' },
];

const HobbyExplorer = () => {
  const renderHobby = ({ item }) => (
    <View style={styles.hobbyContainer}>
      <Icon name={item.icon} size={30} color="#00008B" />
      <View style={styles.hobbyTextContainer}>
        <Text style={styles.hobbyName}>{item.name}</Text>
        <Text style={styles.hobbyCategory}>{item.category}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header - make it full-width */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore Hobbies</Text>
      </View>

      {/* Main content */}
      <FlatList
        data={hobbies}
        keyExtractor={(item) => item.id}
        renderItem={renderHobby}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5' },
  header: {
    backgroundColor: '#00008B',
    width: '100%', // Ensures it stretches across the screen
    paddingTop: 40, // Adjust this to set the header height
    paddingBottom: 20, // Bottom padding for the header
    paddingHorizontal: 20, // Adds side padding
    justifyContent: 'center', // Vertically center the text
    alignItems: 'center', // Horizontally center the text
    borderBottomLeftRadius: 20, // Optional: for rounded corners
    borderBottomRightRadius: 20, // Optional: for rounded corners
  },
  headerText: {
    color: 'white',
    fontSize: 28, // Adjust font size for better visual hierarchy
    fontWeight: 'bold',
    textAlign: 'center', // Ensure the text is centered
  },
  listContent: { paddingBottom: 20 },
  hobbyContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    alignItems: 'center',
  },
  hobbyTextContainer: { marginLeft: 15 },
  hobbyName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#00008B',
  },
  hobbyCategory: {
    fontSize: 14,
    color: '#666',
  },
});

export default HobbyExplorer;