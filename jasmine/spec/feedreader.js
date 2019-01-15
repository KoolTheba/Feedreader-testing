$((() => {
    
    describe('RSS Feeds', () => {

        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(Array.isArray(allFeeds)).toBe(true);
            expect(allFeeds.length).not.toBe(0);
        });

        it('all feeds have a valid and defined URL', () => {
            allFeeds.forEach(({url}) => {
                expect(url).toBeDefined();
                expect(typeof(url)).toBe("string");
                expect(url.length).not.toEqual(0);
            });
        });

        it('all feeds have a valid and defined name', () => {
            allFeeds.forEach(({name}) => {
                expect(name).toBeDefined();
                expect(typeof(name)).toBe("string");
                expect(name.length).not.toEqual(0);
            });
        });
    });


    describe('RSS Feeds', () => {
        
        it('menu element is hidden by default', () => {
            expect(document.body).toHaveClass('menu-hidden');
        });

         it('menu changes visibility when clicked', () => {
             const menu = document.querySelector(".menu-icon-link")
             menu.click();
             expect(document.body).not.toHaveClass('menu-hidden');
             menu.click();
             expect(document.body).toHaveClass('menu-hidden');
         });
    });


    describe('Initial Entries', () => {
        beforeEach(done => {
            loadFeed(0, done)
        });
        
        it('it shows data entry', () => {
         expect(document.querySelector(".feed .entry")).not.toEqual(null);
        });
    });


    describe('New Feed Selection', () => {
        
        const feed = document.querySelector(".feed"); 
        let entriesList = [];
        beforeEach(done => {
           loadFeed(0, () => {
                entriesList =  Array.from(feed.children).map(({innerText}) => innerText);
                loadFeed(1, done);
           });
        });
        
        it("content changes", () => {
            expect(entriesList).not.toContain(feed.children[0].innerText)
        }); 
    });
})());