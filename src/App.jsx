import QuotesSvg from "./QuotesSvg";
import daniel from "./assets/image-daniel.jpg";
import jonathan from "./assets/image-jonathan.jpg";
import jeanette from "./assets/image-jeanette.jpg";
import kira from "./assets/image-kira.jpg";
import patrick from "./assets/image-patrick.jpg";

function App() {
  return (
    <div className="container mx-auto max-w-7xl p-2 md:p-10">
      {/* Grid container  */}
      <div className=" grid grid-cols-1 gap-6 text-white md:grid-cols-4 md:grid-rows-2">
        {/* box 1 */}
        <div className="relative rounded-xl bg-purple-700 p-10 md:col-span-2">
          <QuotesSvg />
          {/* Box Header */}
          <div className="z-10 flex space-x-4">
            <img
              src={daniel}
              alt="daniel"
              className="h-10 w-10 rounded-full ring-2 ring-purple-300"
            />
            <div className="text-sm">
              <h4 className="opacity-90">Daniel Clifford</h4>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          {/* Large text */}
          <p className="z-100 relative mt-6 text-xl">
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
          </p>
          {/* Small text */}
          <p className=" mt-6 line-clamp-6 opacity-50">
            "I was an EMT for many years before I joined the bootcamp. I've been
            looking to make a transition and have heard some people who had an
            amazing experience here. I signed up for the free intro course and
            found it incredibly fun! I enrolled shortly thereafter. The next 12
            weeks was the best - and most grueling - time of my life. Since
            completing the course, I've successfully switched careers, working
            as a Software Engineer at a VR startup. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ratione vero repudiandae, quasi atque
            officiis eum consectetur odio amet dolorem deleniti repellat
            expedita aut sunt laudantium cum itaque nam voluptatum quod! Quo
            totam sequi omnis deserunt? Sit nam molestiae excepturi,
            perspiciatis labore deleniti eum, eligendi quisquam quod sed nobis
            exercitationem tempora! "
          </p>
        </div>

        {/* BOX 2 */}
        <div className="rounded-xl bg-gray-600 p-10">
          {/* Box Header */}
          <div className=" flex space-x-4">
            <img
              src={jonathan}
              alt="daniel"
              className="h-10 w-10 rounded-full ring-2 ring-purple-300"
            />
            <div className="text-sm">
              <h4 className="opacity-90">Jonathan Walters</h4>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          {/* Large text */}
          <p className="  mt-6 text-xl">
            The team was very supportive and kept me motivated
          </p>
          {/* Small text */}
          <p className="mt-6 line-clamp-6 opacity-50">
            "I started as a total newbie with virtually no coding skills. I now
            work as a mobile engineer for a big company. This was one of the
            best investments I've made in myself. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Atque ipsam veritatis natus illum
            ullam ab, nesciunt rerum nobis, quibusdam ad voluptatum rem
            necessitatibus facere nihil deleniti assumenda vel velit neque quia,
            nisi ipsum laudantium impedit eveniet iste. Pariatur, exercitationem
            consequuntur praesentium a est eum velit quos maiores ipsum facere
            tempora! "
          </p>
        </div>

        {/* BOX 3 hidden on small */}
        <div className="hidden rounded-xl bg-white p-10 text-black md:row-span-2 md:block">
          {/* Box Header */}
          <div className=" flex space-x-4">
            <img
              src={kira}
              alt="daniel"
              className="h-10 w-10 rounded-full ring-2 ring-purple-300"
            />
            <div className="text-sm">
              <h4 className="opacity-90">Kira Whittle</h4>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          {/* Large text */}
          <p className="  mt-6 text-xl">
            Such a life-changing experience. Highly recommended!
          </p>
          {/* Small text */}
          <p className="mt-6 opacity-50">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>

        {/* BOX 4 */}
        <div className="rounded-xl bg-white p-10 text-black">
          {/* Box Header */}
          <div className=" flex space-x-4">
            <img
              src={jeanette}
              alt="daniel"
              className="h-10 w-10 rounded-full ring-2 ring-purple-300"
            />
            <div className="text-sm">
              <h4 className="opacity-90">Jeanette Harmon</h4>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          {/* Large text */}
          <p className="  mt-6 text-xl">
            An overall wonderful and rewarding experience
          </p>
          {/* Small text */}
          <p className="mt-6 opacity-50">
            "Thank you for the wonderful experience! I now have a job I really
            enjoy, and make a good living while doing something I love."
          </p>
        </div>

        {/* BOX 5 */}
        <div className="rounded-xl bg-gray-900 p-10 md:col-span-2">
          {/* Box Header */}
          <div className=" flex space-x-4">
            <img
              src={patrick}
              alt="daniel"
              className="h-10 w-10 rounded-full ring-2 ring-purple-300"
            />
            <div className="text-sm">
              <h4 className="opacity-90">Patrick Abrams</h4>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          {/* Large text */}
          <p className="  mt-6 text-xl">
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
          </p>
          {/* Small text */}
          <p className="mt-6 opacity-50">
            "The staff seem genuinely concerned about my progress which I find
            really refreshing. The program gave me the confidence necessary to
            be able to go out in the world and present myself as a capable
            junior developer. The standard is above the rest. You will get the
            personal attention you need from an incredible community of smart
            and amazing people."
          </p>
        </div>

        {/* BOX 6  */}
        <div className=" rounded-xl bg-white p-10 text-black md:hidden">
          {/* Box Header */}
          <div className=" flex space-x-4">
            <img
              src={kira}
              alt="daniel"
              className="h-10 w-10 rounded-full ring-2 ring-purple-300"
            />
            <div className="text-sm">
              <h4 className="opacity-90">Kira Whittle</h4>
              <p className="opacity-50">Verified Graduate</p>
            </div>
          </div>
          {/* Large text */}
          <p className="  mt-6 text-xl">
            Such a life-changing experience. Highly recommended!
          </p>
          {/* Small text */}
          <p className="mt-6 opacity-50">
            "Before joining the bootcamp, I've never written a line of code. I
            needed some structure from professionals who can help me learn
            programming step by step. I was encouraged to enroll by a former
            student of theirs who can only say wonderful things about the
            program. The entire curriculum and staff did not disappoint. They
            were very hands-on and I never had to wait long for assistance. The
            agile team project, in particular, was outstanding. It took my
            learning to the next level in a way that no tutorial could ever
            have. In fact, I've often referred to it during interviews as an
            example of my developent experience. It certainly helped me land a
            job as a full-stack developer after receiving multiple offers. 100%
            recommend!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
