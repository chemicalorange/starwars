import { create } from 'zustand'

export const peopleSlice = create((set) => ({
    data: {
        results: []
    },
    removeAllBears: () => set({ bears: 0 }),
    fetchPeople: () => {
        fetch('https://swapi.dev/api/people').then((response) => response.json()).then(data => set({data}))
    }
}))