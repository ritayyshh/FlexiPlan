import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const hobbies = [
  { id: '1', name: 'Painting', category: 'Art' },
  { id: '2', name: 'Cycling', category: 'Fitness' },
  { id: '3', name: 'Photography', category: 'Creative' },
  { id: '4', name: 'Yoga', category: 'Wellness' },
];

const HobbyExplorer = () => {
  const renderHobby = ({ item }) => (
    <View style={styles.hobbyContainer}>
      <Text style={styles.hobbyName}>{item.name}</Text>
      <Text style={styles.hobbyCategory}>{item.category}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Hobbies</Text>
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
  container: { flex: 1, padding: 20, backgroundColor: '#f0f0f0' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  listContent: { paddingBottom: 20 },
  hobbyContainer: { 
    backgroundColor: 'white', 
    padding: 15, 
    marginVertical: 8, 
    borderRadius: 8, 
    elevation: 2 
  },
  hobbyName: { fontSize: 18, fontWeight: '600' },
  hobbyCategory: { fontSize: 14, color: '#666' },
});

export default HobbyExplorer;