import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Switch, 
  Button, 
  StyleSheet, 
  Image, 
  TouchableOpacity 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';  // Requires expo-linear-gradient
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Icons

const UserProfile = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [offDayToggle, setOffDayToggle] = useState(false);

  return (
    <View style={styles.container}>
      {/* Gradient Header */}
      <LinearGradient 
        colors={['#6200ee', '#3f51b5']}
        style={styles.header}
      >
        <Image 
          source={{ uri: 'https://via.placeholder.com/150' }} // Placeholder image
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
      </LinearGradient>

      {/* User Settings Section */}
      <View style={styles.settingsContainer}>
        <View style={styles.settingRow}>
          <FontAwesome name="bell" size={24} color="#6200ee" />
          <Text style={styles.settingText}>Enable Notifications</Text>
          <Switch 
            value={notificationsEnabled} 
            onValueChange={setNotificationsEnabled} 
          />
        </View>

        <View style={styles.settingRow}>
          <MaterialIcons name="beach-access" size={24} color="#6200ee" />
          <Text style={styles.settingText}>Off-Day Toggle</Text>
          <Switch 
            value={offDayToggle} 
            onValueChange={setOffDayToggle} 
          />
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0' },
  
  // Header with gradient background and profile image
  header: { 
    alignItems: 'center', 
    paddingVertical: 40, 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30,
    elevation: 3, // Shadow effect for Android
  },
  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 10, 
    borderWidth: 2, 
    borderColor: '#fff' 
  },
  userName: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: 'white' 
  },
  userEmail: { 
    fontSize: 16, 
    color: 'white', 
    marginTop: 4 
  },

  // Settings Section
  settingsContainer: { 
    margin: 20, 
    padding: 15, 
    backgroundColor: 'white', 
    borderRadius: 15, 
    elevation: 3 
  },
  settingRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    marginVertical: 10 
  },
  settingText: { 
    flex: 1, 
    marginLeft: 10, 
    fontSize: 18 
  },

  // Action Buttons
  actionButtons: { 
    marginHorizontal: 20, 
    marginTop: 20 
  },
  button: { 
    backgroundColor: '#6200ee', 
    paddingVertical: 15, 
    borderRadius: 30, 
    alignItems: 'center', 
    marginVertical: 5 
  },
  buttonText: { 
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  logoutButton: { 
    backgroundColor: '#d32f2f' 
  },
});

export default UserProfile;