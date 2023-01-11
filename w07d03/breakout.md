- App
  - DayList
    - DayListItem
  - Appointment (index.js)
    - Form
      - InterviewerList
        - InterviewerListItem

```js
const days = [
  {
    name: 'Monday',
    interviwers: [],
    appointments: []
  }
];

const mappedDays = state.days.map((day, index) => {
  return <DayListItem key={index} day={day} />;
});

state.days.map((day) => {
  if (day.name === 'Monday') {
    return day;
  }

  day.appointments = 'something else';
  return day;
});
```

```js
// array methods
arr.forEach // iterate over each element calling a callback
arr.map // takes in an array and returns an array the same length with elements transformed in some way
arr.filter // take in an array and return only the values that "pass" the callback
arr.reduce // take an array of values and "reduce" down to a single value

.filter(() => {})[0];
.find(() => {});
```

1. make it work
2. make it pretty (refactor)
3. make it fast
