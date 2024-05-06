import {atom, selector} from 'recoil'

export const networkAtom=atom({
    key:'networkAtom',
    default:104
})

export const jobsAtom=atom({
    key:'jobsAtom',
    default:0
})

export const notificationsAtom=atom({
    key:'notificationsAtom',
    default:12
})

export const messagingAtom =atom({
    key:"messagingAtom",
    default:0
})

export const totalNotification = selector({
    key: 'totalNotification',
    get: ({ get }) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingCount;
    }
});
