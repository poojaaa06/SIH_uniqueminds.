import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Button, ScrollView } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const LeaveDashboard = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [selectedMonthIndex, setSelectedMonthIndex] = useState(3); // Start with April (index 3)
  const [selectedYear, setSelectedYear] = useState('2024');

  const leaveDataByMonth = {
    January: { totalLeaves: 20, leavesTaken: 4, leavesLeft: 16, breakdown: [{ name: 'Sick', count: 2, color: '#2DBE60' }, { name: 'Vacation', count: 1, color: '#1F9D55' }, { name: 'Personal', count: 1, color: '#B2DAB1' }] },
    February: { totalLeaves: 20, leavesTaken: 6, leavesLeft: 14, breakdown: [{ name: 'Sick', count: 1, color: '#2DBE60' }, { name: 'Vacation', count: 4, color: '#1F9D55' }, { name: 'Personal', count: 1, color: '#B2DAB1' }] },
    March: { totalLeaves: 20, leavesTaken: 6, leavesLeft: 14, breakdown: [{ name: 'Sick', count: 3, color: '#2DBE60' }, { name: 'Vacation', count: 4, color: '#1F9D55' }, { name: 'Personal', count: 1, color: '#B2DAB1' }] },
    April: { totalLeaves: 20, leavesTaken: 6, leavesLeft: 14, breakdown: [{ name: 'Sick', count: 2, color: '#2DBE60' }, { name: 'Vacation', count: 3, color: '#1F9D55' }, { name: 'Personal', count: 1, color: '#B2DAB1' }] },
    May: { totalLeaves: 20, leavesTaken: 5, leavesLeft: 15, breakdown: [{ name: 'Sick', count: 2, color: '#2DBE60' }, { name: 'Vacation', count: 3, color: '#1F9D55' }] },
  };

  const handleMonthChange = (direction) => {
    if (direction === 'next') {
      if (selectedMonthIndex === 11) {
        setSelectedMonthIndex(0);
        setSelectedYear((prev) => (parseInt(prev) + 1).toString());
      } else {
        setSelectedMonthIndex(selectedMonthIndex + 1);
      }
    } else {
      if (selectedMonthIndex === 0) {
        setSelectedMonthIndex(11);
        setSelectedYear((prev) => (parseInt(prev) - 1).toString());
      } else {
        setSelectedMonthIndex(selectedMonthIndex - 1);
      }
    }
  };

  const selectedMonth = months[selectedMonthIndex];
  const leaveData = leaveDataByMonth[selectedMonth];

  const chartData = leaveData.breakdown.map((item) => ({
    name: item.name,
    population: item.count,
    color: item.color,
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  }));

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.profileImage}
          />
          <Text style={styles.headerTitle}>Total Leaves</Text>
          <Icon name="notifications" size={24} color="#000" />
        </View>

        {/* Month Selector */}
        <View style={styles.dateSelector}>
          <TouchableOpacity onPress={() => handleMonthChange('prev')}>
            <Icon name="chevron-left" size={24} color="#2DBE60" />
          </TouchableOpacity>
          <Text style={styles.dateText}>{`${selectedMonth} ${selectedYear}`}</Text>
          <TouchableOpacity onPress={() => handleMonthChange('next')}>
            <Icon name="chevron-right" size={24} color="#2DBE60" />
          </TouchableOpacity>
        </View>

        {/* Leave Information */}
        <View style={styles.leaveInfoContainer}>
          <Text style={styles.leaveInfoText}>
            You have taken <Text style={styles.highlightText}>{leaveData.leavesTaken} leaves</Text> this month.
          </Text>
          <View style={styles.progressContainer}>
            <View style={[styles.progressBar, { width: `${(leaveData.leavesTaken / leaveData.totalLeaves) * 100}%` }]} />
          </View>
          <View style={styles.leaveCount}>
            <Text style={styles.leavesLeft}>{leaveData.leavesLeft}</Text>
            <Text style={styles.leavesLeftLabel}>Leaves Left</Text>
          </View>
        </View>

        {/* Analytics Section */}
        <View style={styles.analyticsContainer}>
          <Text style={styles.analyticsTitle}>Analytics</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Pie Chart */}
        <View style={styles.chartContainer}>
          <PieChart
            data={chartData}
            width={350}
            height={220}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: { borderRadius: 16 },
            }}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
        </View>

        {/* Leave Breakdown */}
        {leaveData.breakdown.map((item, index) => (
          <View key={index} style={styles.leaveItem}>
            <View style={[styles.leaveTypeIndicator, { backgroundColor: item.color }]} />
            <Text style={styles.leaveTypeName}>{item.name}</Text>
            <Text style={styles.leaveTypeCount}>{item.count} days</Text>
          </View>
        ))}

        {/* Request Leave Button */}
        <View style={styles.requestLeaveContainer}>
  <TouchableOpacity style={styles.requestLeaveButton} onPress={() => { /* Handle Leave Request */ }}>
    <Link href="/AskLeave"><Text style={styles.requestLeaveButtonText}>Request Leave</Text></Link>
  </TouchableOpacity>
</View>
      </ScrollView>

      {/* Bottom Navbar */}
      <View style={styles.navbar}>
        <Icon name="home" size={24} color="#000" />
        <Link href="Applyleave"><Icon name="insert-chart" size={24} color="#FF6347" /></Link>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="#FFF" />
        </TouchableOpacity>
        <Icon name="message" size={24} color="#000" />
        <Link href="editprofile"><Icon name="person" size={24} color="#000" /></Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    paddingBottom: 100, // Makes sure content doesn't get cut off when scrolling
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  dateSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
    marginTop:15,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2DBE60',
  },
  leaveInfoContainer: {
    backgroundColor: '#2DBE60',
    padding: 16,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    elevation: 1,
    letterSpacing:1,
  },
  leaveInfoText: {
    fontSize: 16,
    marginBottom: 8,
    color:'#fff'
  },
  highlightText: {
    color: '#fff',
    fontWeight: 'bold',
    
  },
  progressContainer: {
    height: 25,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    marginVertical: 8,
  },
  progressBar: {
    height: 25,
    backgroundColor: '#FF6347',
    borderRadius: 20,
  },
  leaveCount: {
    alignItems: 'center',
    marginVertical: 16,
  },
  leavesLeft: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  leavesLeftLabel: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  analyticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  analyticsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  viewAll: {
    fontSize: 14,
    color: '#FF6347',
  },
  chartContainer: {
    marginHorizontal: 16,
    borderRadius: 16,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  leaveItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  leaveTypeIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
    marginHorizontal:10,
    marginBottom:10,
  },
  leaveTypeName: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  leaveTypeCount: {
    fontSize: 14,
    color: '#7F7F7F',
  },
  requestLeaveContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
    marginTop:20,
  },
  requestLeaveButton: {
    backgroundColor: '#2DBE60', // Change to a different color
    borderRadius: 25, // Rounded edges
    paddingVertical: 12,
    paddingHorizontal: 24,
   
    
  
    
  },
  requestLeaveButtonText: {
    color: '#fff', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: '#FF6347',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LeaveDashboard;
