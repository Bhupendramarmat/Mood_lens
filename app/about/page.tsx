import Image from 'next/image'
import { Card } from '@/components/ui/card'

export default function AboutPage() {
  return (
    <div className="mt-10 flex flex-col gap-3 items-center">
      <Card className="p-10 flex flex-col gap-3 items-center">
        <Image
          src="/wellbeing.png"
          alt="MoodLens Logo"
          width={100}
          height={100}
        />
        <p className="mt-5 text-lg leading-relaxed">
          🌍 In India, the shortage of mental health professionals is alarming —
          only <strong>0.75 psychiatrists per 100,000 people</strong>, far below
          the WHO recommendation of 3. This massive gap highlights the urgent
          need for <span className="font-semibold text-indigo-600">
            innovative solutions
          </span> to make mental health care accessible for all.

          <br /><br />

          💡 <strong>MoodLens</strong> is a pioneering app designed to bridge
          this gap. It enables
          <span className="font-semibold"> daily depression tracking</span> 📊
          using the <strong>PHQ-9 test</strong> and provides
          <span className="font-semibold"> personalized feedback</span> 🤖
          through the Gemini model — offering tailored advice and emotional
          support based on each user’s mental health journey.

          <br /><br />

          🩺 One psychiatrist, multiple patients — that’s the power of MoodLens.
          By enabling <span className="font-semibold">remote psychiatric monitoring</span>,
          the app reduces consultancy costs and makes expert care more
          <span className="font-semibold text-green-600">
               affordable & scalable
          </span>. This ensures more patients get timely care without financial strain.

          <br /><br />

          🚨 With <span className="font-semibold">critical condition alerts</span>,
          💬 personalized advice, and a
          <span className="font-semibold text-purple-600"> supportive community</span> 🤝,
          MoodLens ensures no one is left behind. By blending technology with
          compassion, we aspire to
          <span className="font-bold"> transform mental health care in India</span> —
          making it timely, accessible, and truly effective. 🧠✨
        </p>


      </Card>
    </div>
  )
}
