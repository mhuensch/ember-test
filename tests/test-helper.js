import resolver from './helpers/resolver';
import { setResolver } from 'ember-qunit';

setResolver(resolver);

// This can be set to force all tests to run in the same order each time.
// This can be helpfull when debugging tests as tests that are not atomic
// can sometimes fail in one run and pass in another.
// QUnit.config.reorder = false;
