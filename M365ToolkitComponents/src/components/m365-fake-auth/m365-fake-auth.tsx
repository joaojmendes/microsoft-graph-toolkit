import { Component } from '@stencil/core';
import { Providers } from '@m365toolkit/providers/dist/es6';
import {TestAuthProvider} from '@m365toolkit/providers/dist/es6/TestAuthProvider'

@Component({
    tag: 'm365-test-auth'
})
export class TestProviderComponent {

    async componentWillLoad() {
        Providers.add(new TestAuthProvider());
    }
}