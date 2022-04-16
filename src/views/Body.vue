<template>
    <v-layout row>
        <v-flex xs8>
            <v-layout column>
                <v-flex>
                    <v-sheet>
                        
                    </v-sheet>
                    <v-sheet>
                        <router-link to="/login">Login</router-link>
                        <router-link to="/grid">Grid</router-link>
                        <router-link to="/ss">SS</router-link>
                    </v-sheet>
                    <v-sheet>
                        우리는 인생을 사는 이유를 깨우쳐야한다.1
                    </v-sheet>
                    <v-btn :label="btnLabel"> {{ btnLabel }}</v-btn>
                </v-flex> 
                <v-flex>
                    <v-sheet>
                        우리는 인생을 사는 이유를 깨우쳐야한다.2
                    </v-sheet>
                    <v-btn :label="btnLabel"> {{ btnLabel }}</v-btn>
                </v-flex> 
                <v-flex>
                    <v-sheet>
                        우리는 인생을 사는 이유를 깨우쳐야한다.3
                    </v-sheet>
                    <v-btn :label="btnLabel"> {{ btnLabel }}</v-btn>
                </v-flex> 
            </v-layout>  
        </v-flex>
        <v-flex xs4>
            <v-layout column xs4 lg4 md4>
                <v-flex>
                    <v-sheet>
                        우리는 인생을 사는 이유를 깨우쳐야한다.4
                    </v-sheet>
                    <v-btn :label="btnLabel"> {{ btnLabel }}</v-btn>
                </v-flex> 
            </v-layout>  
        </v-flex>        
    </v-layout>    
</template>