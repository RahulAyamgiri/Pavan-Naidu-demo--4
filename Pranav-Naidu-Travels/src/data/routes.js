export const routes = [
  { id: 1, from: 'Vijayawada', to: 'Hyderabad', distance: '275 km', duration: '4.5 hrs', basePrice: 2800 },
  { id: 2, from: 'Vijayawada', to: 'Tirupati', distance: '470 km', duration: '7 hrs', basePrice: 4500 },
  { id: 3, from: 'Vijayawada', to: 'Amaravati', distance: '35 km', duration: '45 mins', basePrice: 800 },
  { id: 4, from: 'Vijayawada', to: 'Visakhapatnam', distance: '350 km', duration: '5.5 hrs', basePrice: 3500 },
  { id: 5, from: 'Vijayawada', to: 'Chennai', distance: '450 km', duration: '6.5 hrs', basePrice: 4200 },
  { id: 6, from: 'Vijayawada', to: 'Bangalore', distance: '660 km', duration: '9 hrs', basePrice: 6000 },
  { id: 7, from: 'Vijayawada', to: 'Araku Valley', distance: '510 km', duration: '8 hrs', basePrice: 5000 },
  { id: 8, from: 'Vijayawada', to: 'Srisailam', distance: '290 km', duration: '5 hrs', basePrice: 3000 },
  { id: 9, from: 'Hyderabad', to: 'Tirupati', distance: '580 km', duration: '8 hrs', basePrice: 5500 },
  { id: 10, from: 'Guntur', to: 'Hyderabad', distance: '300 km', duration: '5 hrs', basePrice: 3000 },
];

export const locations = [
  'Vijayawada',
  'Hyderabad',
  'Tirupati',
  'Amaravati',
  'Visakhapatnam',
  'Chennai',
  'Bangalore',
  'Guntur',
  'Tenali',
  'Machilipatnam',
  'Nellore',
  'Rajahmundry',
  'Kakinada',
  'Araku Valley',
  'Srisailam',
  'Ongole',
];

export const schedules = [
  { id: 1, route: 'Vijayawada → Hyderabad', car: 'Innova Crysta', departure: '06:00 AM', arrival: '10:30 AM', status: 'On Time', seats: 3 },
  { id: 2, route: 'Vijayawada → Tirupati', car: 'Tempo Traveller', departure: '05:00 AM', arrival: '12:00 PM', status: 'On Time', seats: 8 },
  { id: 3, route: 'Hyderabad → Vijayawada', car: 'Swift Dzire', departure: '07:00 AM', arrival: '11:30 AM', status: 'Delayed', seats: 2 },
  { id: 4, route: 'Vijayawada → Vizag', car: 'Toyota Fortuner', departure: '08:00 AM', arrival: '01:30 PM', status: 'On Time', seats: 5 },
  { id: 5, route: 'Vijayawada → Amaravati', car: 'Swift Dzire', departure: '09:00 AM', arrival: '09:45 AM', status: 'Completed', seats: 0 },
  { id: 6, route: 'Vijayawada → Chennai', car: 'BMW 5 Series', departure: '06:30 AM', arrival: '01:00 PM', status: 'On Time', seats: 2 },
  { id: 7, route: 'Guntur → Hyderabad', car: 'Innova Crysta', departure: '07:30 AM', arrival: '12:30 PM', status: 'On Time', seats: 4 },
  { id: 8, route: 'Vijayawada → Srisailam', car: 'Tempo Traveller', departure: '05:30 AM', arrival: '10:30 AM', status: 'Delayed', seats: 6 },
];
