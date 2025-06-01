// screens/DashboardScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.appName}>MFix</Text>
      <TouchableOpacity style={styles.notificationIcon} onPress={() => { /* Handle notification click */ }}>
          <Icon name="bell" size={24} color="#fff" />
        </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Vehicle Status</Text>

        <View style={styles.statusContainer}>
          <View style={styles.statusCard}>
            <Text style={styles.statusLabel}>Engine</Text>
            <Text style={styles.statusValue}>Normal</Text>
          </View>
          <View style={styles.statusCard}>
            <Text style={styles.statusLabel}>Tires</Text>
            <Text style={styles.statusValue}>Good</Text>
          </View>
        </View>

        <View style={styles.statusCardFull}>
          <Text style={styles.statusLabel}>Battery</Text>
          <Text style={styles.statusValue}>Charged</Text>
        </View>

        <TouchableOpacity 
        style={styles.diagnosticButton}
         onPress={() => navigation.navigate('Login')}
>
  <Text style={styles.diagnosticText}>Start Diagnostic</Text>
</TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shortcuts</Text>
        <View style={styles.shortcutsContainer}>
          <View style={styles.shortcut}>
            <Ionicons name="time-outline" size={24} color="white" />
            <Text style={styles.shortcutText}>Recent Results</Text>
          </View>
          <View style={styles.shortcut}>
            <Ionicons name="notifications-outline" size={24} color="white" />
            <Text style={styles.shortcutText}>Reminders</Text>
          </View>
          <View style={styles.shortcut}>
            <FontAwesome name="play-circle-o" size={24} color="white" />
            <Text style={styles.shortcutText}>Tutorials</Text>
          </View>
          <View style={styles.shortcut}>
            <Ionicons name="car-outline" size={24} color="white" />
            <Text style={styles.shortcutText}>Sell Car</Text>
          </View>
        </View>
      </View>
      <View style={styles.diagnosisContainer}>
  <View style={styles.diagnosisTextContainer}>
    <Text style={styles.diagnosisTitle}>2021 Honda Civic</Text>
    <Text style={styles.diagnosisLabel}>Engine Check</Text>
    <Text style={styles.diagnosisStatus}>No issues detected</Text>
  </View>
  <Image
    source={{ uri: 'https://img.freepik.com/premium-psd/car-engine-style-engineering-isolated-transparent-background_1195761-72976.jpg' }}
    style={styles.engineImage}
  />
</View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingTop: 55,
      paddingHorizontal: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    appName: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 10,
    },
    notificationIcon: {
      position: 'absolute',
      top: 6,
      right: 20,
      zIndex: 1,
    },
    section: {
      marginVertical: 15,
      paddingTop: 30,
    },
    sectionTitle: {
      color: 'white',
      fontSize: 20,
      fontWeight: '600',
      marginBottom: 10,
    },
    statusContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    statusCard: {
      flex: 1,
      backgroundColor: '#3e4b26',
      padding: 15,
      marginRight: 10,
      borderRadius: 10,
    },
    statusCardFull: {
      backgroundColor: '#3e4b26',
      padding: 15,
      borderRadius: 10,
      marginTop: 10,
    },
    statusLabel: {
      color: 'white',
      fontSize: 14,
    },
    statusValue: {
      color: 'white',
      fontSize: 18,
      fontWeight: '700',
    },
    diagnosticButton: {
      backgroundColor: '#78C20A',
      padding: 15,
      borderRadius: 8,
      marginTop: 20,
      alignItems: 'center',
    },
    diagnosticText: {
      color: '#000',
      fontWeight: '700',
      fontSize: 16,
    },
    shortcutsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    shortcut: {
      width: '48%',
      backgroundColor: '#384A21',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      marginBottom: 10,
    },
    shortcutText: {
      color: 'white',
      marginTop: 8,
      fontSize: 14,
      textAlign: 'center',
    },
    diagnosisContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#1c1f14',
      padding: 10,
      borderRadius: 10,
      marginTop: 10,
    },
    diagnosisTextContainer: {
      flex: 1,
      marginRight: 10,
    },
    diagnosisTitle: {
      color: 'white',
      fontSize: 14,
      fontWeight: '600',
    },
    diagnosisLabel: {
      color: 'white',
      fontSize: 13,
      fontWeight: 'bold',
      marginTop: 4,
    },
    diagnosisStatus: {
      color: '#bbb',
      fontSize: 12,
      marginTop: 2,
    },
    engineImage: {
      width: 90,
      height: 70,
      borderRadius: 10,
    },
  });
  

export default DashboardScreen;
