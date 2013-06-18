TESTS = $(shell find test -type f -name "*.js")
TESTTIMEOUT = 5000
REPORTER = list

install:
	@sudo npm install
	@mysql -u root -p < sql/blog.sql

test:
	@NODE_ENV=test ./node_modules/mocha/bin/mocha \
    --reporter $(REPORTER) --timeout $(TESTTIMEOUT) $(TESTS)

