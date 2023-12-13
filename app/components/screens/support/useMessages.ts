import { useEffect, useState } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import dayjs from 'dayjs';
import { IMessage } from './types';
import { db } from '../../../firebase';

export const useMessages = () => {
    const [messages, setMessages] = useState<IMessage[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
                const unsubscribe = onSnapshot(q, snapshot => {
                    setMessages(
                        snapshot.docs.map(d =>
                            d.data()?.timestamp
                                ? ({
                                    _id: d.id,
                                    ...d.data(),
                                    timestamp: dayjs.unix(d.data()?.timestamp.seconds).format('HH:mm'),
                                } as IMessage)
                                : ({ _id: d.id, ...d.data() } as IMessage)
                        )
                    );
                    setIsLoading(false);
                });
                return () => unsubscribe();
            } catch (error) {
                console.error('Error fetching messages:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Внимание: пустой массив зависимостей, чтобы useEffect выполнился только при монтировании и размонтировании

    return { messages, isLoading };
};
