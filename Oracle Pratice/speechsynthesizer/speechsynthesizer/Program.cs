using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Speech.Synthesis;

namespace speechsynthesizer
{
    internal class Program
    {
        static void Main(string[] args)
        {

            using (SpeechSynthesizer synthesizer = new SpeechSynthesizer())
            {

                // synthesizer.SelectVoiceByHints(VoiceGender.Female, VoiceAge.Adult);

                Console.WriteLine("Enter the text to convert to speech:");
                string textToSpeak = Console.ReadLine();
               
                synthesizer.Speak(textToSpeak);

                Console.WriteLine("Speech synthesis completed.");

            }
        }
    }
}
