import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, FlatList, SafeAreaView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Link } from 'expo-router';

const AttendanceDashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('July');
  const [modalVisible, setModalVisible] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const attendanceData = {
    January: { days: 15, data: [3, 4, 4, 4] },
    February: { days: 14, data: [3, 4, 3, 4] },
    March: { days: 16, data: [4, 4, 4, 4] },
    April: { days: 15, data: [4, 3, 4, 4] },
    May: { days: 16, data: [4, 4, 4, 4] },
    June: { days: 14, data: [3, 4, 3, 4] },
    July: { days: 15, data: [4, 3, 4, 4] },
    August: { days: 16, data: [4, 4, 4, 4] },
    September: { days: 15, data: [4, 3, 4, 4] },
    October: { days: 16, data: [4, 4, 4, 4] },
    November: { days: 14, data: [3, 4, 3, 4] },
    December: { days: 15, data: [4, 3, 4, 4] },
  };

  const transactions = [
    { id: 1, title: 'Late Arrival', details: '09:15 AM', amount: '-30 min' },
    { id: 2, title: 'Early Leave', details: '05:30 PM', amount: '-15 min' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.profileImage}
          />
          <Text style={styles.headerTitle}>Home</Text>
          <Icon name="notifications" size={24} color="#000" />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total Attendance</Text>
          <Text style={styles.balance}>{attendanceData[selectedMonth].days} days</Text>
          <Text style={styles.cardNumber}>Month: {selectedMonth} 2023</Text>
        </View>

        <View style={styles.analyticsContainer}>
          <Text style={styles.sectionTitle}>Analytics</Text>
          <TouchableOpacity style={styles.yearSelector} onPress={() => setModalVisible(true)}>
            <Text>{selectedMonth} - 2023</Text>
            <Icon name="arrow-drop-down" size={24} color="#FF6347" />
          </TouchableOpacity>
        </View>

        <BarChart
          data={{
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{ data: attendanceData[selectedMonth].data }],
          }}
          width={350}
          height={220}
          yAxisLabel=""
          yAxisSuffix=" days"
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(62, 176, 117, ${opacity})`,
            style: { borderRadius: 16 },
            barPercentage: 1.2,
            propsForBackgroundLines: {
              strokeDasharray: '10, 10',
              strokeWidth: 1,
              stroke: '#F5F5F5',
            },
            propsForLabels: {
              fontSize: 12,
              fontWeight: 'bold',
            },
          }}
          style={styles.chart}
          showValuesOnTopOfBars={true}
          fromZero={true}
          segments={5}
          formatYLabel={(value) => Math.round(value).toString()}
        />

        <View style={styles.transactionsContainer}>
          <Text style={styles.sectionTitle}>Recent Activities</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {transactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <Icon name="access-time" size={24} color="#2DBE60" />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>{transaction.title}</Text>
              <Text style={styles.transactionDate}>{transaction.details}</Text>
            </View>
            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.navbar}>
        <Icon name="home" size={24} color="#FF6347" />
        <Link href="Applyleave"><Icon name="insert-chart" size={24} color="#000" /></Link>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="#FFF" />
        </TouchableOpacity>
        <Icon name="message" size={24} color="#000" />
        <Link href="editprofile"><Icon name="person" size={24} color="#000" /></Link>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <FlatList
              data={months}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.monthItem}
                  onPress={() => {
                    setSelectedMonth(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.monthText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    paddingBottom: 80,
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
  },
  card: {
    backgroundColor: '#2DBE60',
    borderRadius: 16,
    padding: 16,
    margin: 16,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 14,
  },
  balance: {
    color: '#FFF',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  cardNumber: {
    color: '#FFF',
    fontSize: 14,
  },
  analyticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  yearSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 8,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    marginLeft: 20,
  },
  transactionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  viewAll: {
    color: '#FF6347',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  transactionIcon: {
    backgroundColor: '#E8F5E9',
    padding: 8,
    borderRadius: 8,
    marginRight: 16,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDate: {
    color: '#888',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2DBE60',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#FF6347',
  },
  monthItem: {
    padding: 15,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  monthText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default AttendanceDashboard;
