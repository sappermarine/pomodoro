import { PomodoroTimer } from '@/components/pomodoro-timer';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Pomodoro Timer</h1>
      <div className="mb-8">
        <Image
          src="https://placehold.co/300x300"
          alt="Placeholder"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>
      <PomodoroTimer />
    </main>
  );
}
