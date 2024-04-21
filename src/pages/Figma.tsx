export const Figma = () => {
  const links = [
    {
      challenge: 39,
      link: 'https://www.figma.com/file/12IeYumcCwUPAis1B8v38O/MEDICATION-APP?type=design&node-id=0-1&mode=design&t=VxluIlbHYa9Gv6Cg-0',
    },
    {
      challenge: 41,
      link: 'https://www.figma.com/file/695aG6t8q1Dc65EJXPuAR2/Symptom-Tracker?type=design&node-id=0-1&mode=design&t=YMEUCTfuMW5Xzkb8-0',
    },
    {
      challenge: 16,
      link: 'https://www.figma.com/file/ENr7uHO9xGiNFLKntbZnFn/Intuitive-Fitness-Tracking-App-UI-Design?type=design&node-id=0-1&mode=design&t=ZSrH8rncDWsAztLG-0',
    },
  ];
  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {links.map((link) => (
        <a target="_blank" href={link.link} rel="noreferrer">
          {link.challenge}
        </a>
      ))}
    </div>
  );
};
