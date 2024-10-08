import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function HomePage({ route }) {
  const currentDate = new Date().toLocaleDateString();
  const [quotes, setQuotes] = useState([]);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const fetchQuotes = async () => {
    try {
      const response = await fetch(`http://172.16.84.108:5000/api/quotes`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuotes(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch quotes. Please try again later.');
      console.error(error);
    }
  };

  const Sidebar = () => (
    <Animated.View style={[styles.sidebar, isSidebarVisible ? styles.sidebarVisible : styles.sidebarHidden]}>
      <TouchableOpacity style={styles.closeSidebarButton} onPress={() => setSidebarVisible(false)}>
        <Icon name="close-outline" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.menuItems}>
        <TouchableOpacity onPress={() => setSidebarVisible(false)} style={styles.menuItem}>
          <Icon name="home-outline" size={24} color="white" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSidebarVisible(false)} style={styles.menuItem}>
          <Icon name="person-outline" size={24} color="white" />
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSidebarVisible(false)} style={styles.menuItem}>
          <Icon name="settings-outline" size={24} color="white" />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSidebarVisible(false)} style={styles.menuItem}>
          <Icon name="log-out-outline" size={24} color="white" />
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSidebarVisible(false)} style={styles.menuItem}>
          <Icon name="people-outline" size={24} color="white" />
          <Text style={styles.menuText}>My Community</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSidebarVisible(false)} style={styles.menuItem}>
          <Icon name="trophy-outline" size={24} color="white" />
          <Text style={styles.menuText}>Gamification</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSidebarVisible(false)} style={styles.menuItem}>
          <Icon name="analytics-outline" size={24} color="white" />
          <Text style={styles.menuText}>Track Progress</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
  

  return (
    <View style={styles.container}>
      {/* Sidebar Toggle Button */}
      <TouchableOpacity style={styles.sidebarToggle} onPress={() => setSidebarVisible(true)}>
        <Icon name="menu-outline" size={30} color="white" />
      </TouchableOpacity>

      {/* Sidebar */}
      {isSidebarVisible && (
        <View style={styles.overlay}>
          <Sidebar />
        </View>
      )}

      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.welcomeText}>
          <Icon name="person-circle-outline" size={30} color="#FFC107" /> Welcome back!
        </Text>
        <Text style={styles.dateText}>
          <Icon name="calendar-outline" size={20} color="#FFC107" /> Today is {currentDate}
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Icon name="stats-chart-outline" size={20} color="#FFC107" /> Your Stats
          </Text>
          <Text style={styles.cardContent}>Tasks Completed: 5</Text>
          <Text style={styles.cardContent}>Points Earned: 100</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="add-circle-outline" size={20} color="white" />
            <Text style={styles.buttonText}>New Task</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="eye-outline" size={20} color="white" />
            <Text style={styles.buttonText}>View Progress</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Icon name="time-outline" size={20} color="#FFC107" /> Recent Activity
          </Text>
          <Text style={styles.cardContent}>• Completed "Project A" task</Text>
          <Text style={styles.cardContent}>• Earned 50 points</Text>
          <Text style={styles.cardContent}>• Reached level 5</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            <Icon name="people-outline" size={20} color="#FFC107" /> Community
          </Text>
          <Text style={styles.cardContent}>Connect with like-minded individuals</Text>

          <TouchableOpacity style={styles.button} onPress={fetchQuotes}>
            <Icon name="eye-outline" size={20} color="white" />
            <Text style={styles.buttonText}>View Quotes</Text>
          </TouchableOpacity>
        </View>

        {quotes.length > 0 && (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Quotes</Text>
            {quotes.map((quote, index) => (
              <Text key={index} style={styles.cardContent}>
                "{quote.q}" - {quote.a}
              </Text>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

// Styles remain the same


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    backgroundColor: '#FFC107',
    padding: 20,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    padding: 20,
  },
  sidebarToggle: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2,
  },
    sidebar: {
      width: 250,
      backgroundColor: '#FFC107',
      padding: 20,
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 3,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 5,
    },
    sidebarVisible: {
      transform: [{ translateX: 0 }],
    },
    sidebarHidden: {
      transform: [{ translateX: -250 }],
    },
    closeSidebarButton: {
      alignSelf: 'flex-end',
      marginBottom: 20,
    },
    menuItems: {
      flex: 1,
      justifyContent: 'center',
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 15,
      paddingHorizontal: 10,
      borderRadius: 10,
      backgroundColor: 'black',
      marginBottom: 10,
    },
    menuText: {
      color: 'white',
      fontSize: 18,
      marginLeft: 10,
    },
  
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  dateText: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  cardContent: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
});