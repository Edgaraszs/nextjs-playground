import { toast } from 'react-toastify';

export default class Toastify {
  message: string;
  options: Object;
 
  constructor(message: string, options: Object = {}) {
    this.message = message;
    this.options = { theme: 'dark', ...options };
  }
 
  success() {
    toast.success(this.message, this.options);
  }

  warning() {
    toast.warning(this.message, this.options);
  }

  error() {
    toast.error(this.message, this.options);
  }
}