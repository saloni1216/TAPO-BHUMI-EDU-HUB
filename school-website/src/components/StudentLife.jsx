import './StudentLife.css';

const storiesData = [
  {
    id: 1,
    pageNumber: "66",
    badgeText: "Middle School Service",
    dropCap: "H",
    text1: "ello, we are Dol, Stanley, Tri, Grace, and Vinnie from G6L. During the second semester, our service project focused on Quality Education. Before our service action, we learned about the situation of deaf students in a school. We also found out that they had a really hard time doing normal things, like communicating.",
    text2: "For our action, we decided to visit the school to see the students' situation firsthand and interview a teacher to learn more about life as a deaf student. We also bought resources like food and water for them. After this action, we reflected on what we did and what else regular people can do.",
    imgTop: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600",
    imgMid1: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=500",
    imgMid2: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500",
    imgBottom: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
  },
  {
    id: 2,
    pageNumber: "67",
    badgeText: "High School Service Clubs",
    dropCap: "G",
    text1: "reetings! We are Kao, Jimmy, Icon, Putney, and Marwin from Grade 8, and during the second semester, our service project focused on 'Quality Education and Good health and Well Being'. Before our service action, we learnt that the community that we are designated to help needs the enjoyment of music, to help brighten the mood.",
    text2: "For our action we decided to go play music at a homeless children orphanage in Bangkok. We practiced a total of 3 songs to play for the children. Furthermore, we also allowed the childrens to come join us and sing along, plus handing out varieties of snacks to the childrens.",
    imgTop: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600",
    imgMid1: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500",
    imgMid2: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=500",
    imgBottom: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
  },
  {
    id: 3,
    pageNumber: "68",
    badgeText: "High School Clubs - Food for All",
    dropCap: "F",
    text1: "ood for All is a club that aims to provide food for communities in need. We do this by fundraising and then purchasing food, which we deliver directly to these communities. At the start of this semester, we went to the Mirror Foundation and donated canned goods.",
    text2: "In the following month, we sold drinks and pancakes at the Songkran festival, despite encountering several issues. Our members were able to solve problems and work well under pressure to lay a solid foundation for the next school year.",
    imgTop: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600",
    imgMid1: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500",
    imgMid2: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500",
    imgBottom: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800"
  },
  {
    id: 4,
    pageNumber: "69",
    badgeText: "Seed of Hope Club",
    dropCap: "S",
    text1: "eed of Hope is a service that allows club members to foster an environment-friendly mind in hopes of bringing a difference into the nature of Thailand. Seed of Hope's objective is to raise awareness about sustainability as well as do hands-on service.",
    text2: "In this semester, Seed of Hope held a planting trip to a mangrove in Bang Pakong. Through the help of volunteers and SOH members, the mangrove ecosystem is now recovering into a habitable ecosystem once again.",
    imgTop: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600",
    imgMid1: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500",
    imgMid2: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=500",
    imgBottom: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
  },
  {
    id: 5,
    pageNumber: "70",
    badgeText: "Psychology & Art Clubs",
    dropCap: "O",
    text1: "ur Art Club offers an experience that allows members to immerse themselves in activities beyond art by incorporating service activities for members to expand the scope of application. We focus on creating art-based learning materials to donate.",
    text2: "When we went to the orphanage to donate these book packages, the children and teachers were very happy to receive more interactive learning materials as this opened up an amazing opportunity for the kids to learn beautifully.",
    imgTop: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600",
    imgMid1: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500",
    imgMid2: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?w=500",
    imgBottom: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800"
  }
];

function StudentLife() {
  return (
    <div className="magazine-container">
      
      <header className="magazine-header">
        <div className="magazine-header-meta">Student Life & Service</div>
        <h1 className="magazine-main-title">Student Life and Service</h1>
      </header>

      
      <main className="magazine-scroll-feed">
        {storiesData.map((story) => (
          <section key={story.id} className="magazine-story-section">
            
            {/* Top Grid Panel */}
            <div className="magazine-row-top">
              <div>
                <div className="category-badge-teal">{story.badgeText}</div>
                <p className="magazine-body-text">
                  <span className="drop-cap-cyan">{story.dropCap}</span>
                  {story.text1}
                </p>
                <p className="magazine-body-text">
                  {story.text2}
                </p>
              </div>

              <div className="image-container">
                <img className="large-feature-image" src={story.imgTop} alt="Activity top feature" />
              </div>
            </div>

            {/* Middle Grid Row */}
            <div className="magazine-row-middle">
              <div className="image-container">
                <img className="sub-split-image" src={story.imgMid1} alt="Sub activity panel A" />
              </div>
              <div className="image-container">
                <img className="sub-split-image" src={story.imgMid2} alt="Sub activity panel B" />
              </div>
            </div>

            {/* Bottom Wide Row */}
            <div className="magazine-row-bottom">
              <div className="image-container">
                <img className="bottom-wide-image" src={story.imgBottom} alt="Wide layout showcase" />
              </div>
            </div>

            {/* Same-to-Same Yellow Indicator layout box */}
            <div className="magazine-page-tag">
              <span className="tag-bold-number">{story.pageNumber}</span>
              <span>CONCORDIAN IMPACT - ISSUE 40</span>
            </div>

          </section>
        ))}
      </main>
    </div>
  );
}

export default StudentLife;