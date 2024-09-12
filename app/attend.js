import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import BottomNavigationBar from './BottomNavigationBar'; // Adjust path as necessary

const AttendanceScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Monthly');

  // Sample data to fill the page more
  const weeklyData = [
    { type: 'Start Shift', time: '9:00 AM', date: 'Mon - 20 Feb 2023', status: 'On time' },
    { type: 'End Shift', time: '5:00 PM', date: 'Mon - 20 Feb 2023', status: 'On time' },
    { type: 'Start Shift', time: '9:15 AM', date: 'Tue - 21 Feb 2023', status: 'Late' },
    { type: 'End Shift', time: '5:10 PM', date: 'Tue - 21 Feb 2023', status: 'Over time' },
    // Add more entries as needed...
  ];

  const monthlyData = [
    { type: 'Start Shift', time: '9:12 AM', date: 'Mon - 23 Feb 2023', status: 'Late' },
    { type: 'End Shift', time: '12:12 PM', date: 'Mon - 23 Feb 2023', status: 'On time' },
    { type: 'Start Shift', time: '9:10 AM', date: 'Tue - 24 Feb 2023', status: 'Late' },
    { type: 'End Shift', time: '12:15 PM', date: 'Tue - 24 Feb 2023', status: 'Over time' },
    { type: 'Start Shift', time: '9:12 AM', date: 'Wed - 25 Feb 2023', status: 'On time' },
    { type: 'End Shift', time: '12:12 PM', date: 'Wed - 25 Feb 2023', status: 'On time' },
    // More data to fill the screen
  ];

  const yearlyData = [
    { type: 'Start Shift', time: '8:30 AM', date: 'Mon - 15 Jan 2023', status: 'On time' },
    { type: 'End Shift', time: '4:30 PM', date: 'Mon - 15 Jan 2023', status: 'On time' },
    { type: 'Start Shift', time: '8:45 AM', date: 'Tue - 16 Jan 2023', status: 'Late' },
    { type: 'End Shift', time: '4:45 PM', date: 'Tue - 16 Jan 2023', status: 'Over time' },
    // Add more entries as necessary...
  ];

  const getData = () => {
    switch (selectedTab) {
      case 'Weekly':
        return weeklyData;
      case 'Yearly':
        return yearlyData;
      default:
        return monthlyData;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>🔄</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.shiftType}>{item.type}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={[styles.status, getStatusStyle(item.status)]}>{item.status}</Text>
      </View>
    </View>
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Late':
        return { color: '#FF6B6B' };
      case 'On time':
        return { color: '#2DBE60' };
      case 'Over time':
        return { color: '#4D79FF' };
      default:
        return { color: '#888' };
    }
  };

  return (
    <View style={styles.container}>
      {/* Header with Tabs */}
      <View style={styles.header}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Weekly' && styles.activeTab]}
          onPress={() => setSelectedTab('Weekly')}
        >
          <Text style={[styles.tabText, selectedTab === 'Weekly' && styles.activeTabText]}>Weekly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Monthly' && styles.activeTab]}
          onPress={() => setSelectedTab('Monthly')}
        >
          <Text style={[styles.tabText, selectedTab === 'Monthly' && styles.activeTabText]}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Yearly' && styles.activeTab]}
          onPress={() => setSelectedTab('Yearly')}
        >
          <Text style={[styles.tabText, selectedTab === 'Yearly' && styles.activeTabText]}>Yearly</Text>
        </TouchableOpacity>
      </View>

      {/* Attendance Info */}
      <View style={styles.attendanceInfo}>
        <Text style={styles.attendanceText}>
          Attendance for {selectedTab === 'Monthly' ? 'February' : selectedTab}
        </Text>
        <Text style={styles.totalHours}>Total Hours : 410</Text>
      </View>

      {/* Attendance List */}
      <FlatList
        data={getData()}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContent}
      />

      {/* Bottom Navigation Bar */}
      <BottomNavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#E7F5E9',
  },
  tabText: {
    color: '#333',
    fontSize: 16,
  },
  activeTabText: {
    color: '#2DBE60',
    fontWeight: 'bold',
  },
  attendanceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E7F5E9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  attendanceText: {
    color: '#2DBE60',
    fontSize: 16,
  },
  totalHours: {
    color: '#2DBE60',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 15,
  },
  iconText: {
    fontSize: 18,
  },
  detailsContainer: {
    flex: 1,
  },
  shiftType: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#666',
    fontSize: 14,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    marginTop: 5,
    fontSize: 14,
  },
});

export default AttendanceScreen;
