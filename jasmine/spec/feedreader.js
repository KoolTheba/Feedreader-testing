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


    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
