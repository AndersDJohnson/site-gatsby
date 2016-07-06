import stripIndent from 'strip-indent'

export const location = {
  city: 'Minneapolis',
  state: 'MN',
  country: 'USA',
}

export const tests = [
  {
    name: 'ACT',
    score: 33,
    percentile: 99
  },
  {
    name: 'SAT',
    score: 2080,
    percentile: 94
  },
  {
    name: 'PSAT/NMSQT',
    score: 23,
    percentile: 99
  },
]

export const honorsAwardsDetails = {
  // UMN Dean's List
  253: {
    description: 'Semester GPA: 3.834',
    date: {
      month: 5,
      year: 2013
    }
  },
  249: {
    description: stripIndent(`
    My team placed 2nd out of five teams. I played a lead role among my team of three.
    [https://acm.umn.edu/](https://acm.umn.edu/)
    `),
    date: {
      month: 3,
      year: 2011
    }
  },
  510942745: {
    description: stripIndent(`
      Awarded for my development work (on e-commerce site and POS app) to support
      a new product release - the "Luxe Rings Initiative"​ - in recognition of results
      in alignment with Jostens'​ mission, vision, values, and strategy.
      The new "Luxe" rings very quickly rose up to 25% share of all ring sales.
    `),
    date: {
      month: 10,
      year: 2014
    }
  },
  1915771936: {
    description: stripIndent(`
      From my direct manager:
      "I really appreciate the effort you put forth everyday on your assignments.
      A great example is the Patriots event on the iPad. Keep up the great work."
      In reference particularly to my work on an internal POS custom hybrid web/iOS
      app for which I develop the web components.
      Signed by 10 co-workers & managers.
    `),
    date: {
      month: 6,
      year: 2015
    }
  },
  1602937825: {
    description: stripIndent(`
      From another manager:
      "Your willingness to help others sets an example for all of us in IT.
      Your assistance assured the project stays on schedule, you minimized frustration which increased productivity."
      Signed by 4 co-workers & managers.
    `),
    date: {
      month: 4,
      year: 2016
    }
  },
  510942746: {
    description: stripIndent(`
      For representing Jostens at the Spring 2015 University of Minnesota Job and Internship Fair
      ([https://jobfair.umn.edu/](https://jobfair.umn.edu/)).
      From an HR lead.
    `),
    date: {
      month: 2,
      year: 2015
    }
  },
  510942747: {
    description: stripIndent(`
      For representing Jostens at the Spring 2014 University of Minnesota Job and Internship Fair
      ([https://jobfair.umn.edu/](https://jobfair.umn.edu/)).
      From an HR lead.
    `),
    date: {
      month: 2,
      year: 2014
    }
  },
  1916012882: {
    description: 'Recognition received after one year of employment.',
    date: {
      month: 6,
      year: 2014
    }
  },
}
