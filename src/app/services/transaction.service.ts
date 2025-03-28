import { Injectable } from '@angular/core';
import { TransactionItem } from '../models/transaction.type';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  transactions: TransactionItem[] = [
    {
      label: 'Alpha Analytics',
      description: 'General',
      date: new Date('2024-08-27'),
      price: 450,
      imagePath: '/assets/images/avatars/emma-richardson.jpg'
    },
    {
      label: 'Bravo Zen Spa',
      description: 'Personal Care',
      date: new Date('2024-08-29'),
      price: -25,
      imagePath: '/assets/images/avatars/emma-richardson.jpg'
    },
    {
      label: 'Echo Game Store',
      description: 'Lifestyle',
      date: new Date('2024-08-22'),
      price: -21.5,
      imagePath: '/assets/images/avatars/emma-richardson.jpg'
    },
    {
      label: 'Delta Taxi',
      description: 'Transportation',
      date: new Date('2024-08-19'),
      price: -15,
      imagePath: '/assets/images/avatars/emma-richardson.jpg'
    },
    {
      label: 'Charlie Electric Co.',
      description: 'Bills',
      date: new Date('2024-08-01'),
      price: -100,
      imagePath: '/assets/images/avatars/emma-richardson.jpg'
    }
  ];
}
