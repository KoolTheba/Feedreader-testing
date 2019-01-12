$(function() {
    
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(Array.isArray(allFeeds)).toBe(true);
            expect(allFeeds.length).not.toBe(0);
        });

        it('all feeds have a valid and defined URL', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(typeof(feed.url)).toBe("string");
                expect(feed.url.length).not.toEqual(0);
            });
        });

        it('all feeds have a valid and defined name', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(typeof(feed.name)).toBe("string");
                expect(feed.name.length).not.toEqual(0);
            });
        });
    });


    describe('RSS Feeds', function() {
        
        it('menu element is hidden by default', function() {
            expect(document.body).toHaveClass('menu-hidden');
        });

         it('menu changes visibility when clicked', function() {
             const menu = document.querySelector(".menu-icon-link")
             menu.click();
             expect(document.body).not.toHaveClass('menu-hidden');
             menu.click();
             expect(document.body).toHaveClass('menu-hidden');
         });
    });


    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done)
        });
        
        it('it shows data entry', function() {
         expect(document.querySelector(".feed .entry")).not.toEqual(null);
        });
    });


    describe('New Feed Selection', function() {
        
        const feed = document.querySelector(".feed"); 
        let entriesList = [];
        beforeEach(function(done){
           loadFeed(0);
          entriesList =  Array.from(feed.children).map(function(entry){
               return entry.innerText;
           });
           loadFeed(1, done);
        });
        
        it("content changes", function(){
            expect(entriesList).not.toContain(feed.children[0].innerText)
        }); 
    });
}());
