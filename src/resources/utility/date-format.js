import moment from 'moment';

export class DateFormatValueConverter {
  toView(value) {
      return moment(value).format('M/D/YYY h:mm a');
    }
    //twoway
  fromView(value) {
    return new Date(value)
  }
}
