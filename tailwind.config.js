export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                color1: '#F8FAFC',
                color2: '#1B82F6',
                color3: '#8DD8FF',
                color4: '#0F172A',
            },
            fontFamily: {
                'inter': ['Inter', 'sans-serif'],
            },
            fontSize: {
                base: '16px',
                sm: '13px',
                md: '18px',
                lg: '20px',
                xl: '24px'
            },
            spacing: {
                1: '4px',
                2: '8px',
                3: '16px',
                4: '24px',
                5: '32px',
                6: '48px',
                'smol': '30%',
                'med': '50%',
                'lrg': '70%',
                'xlrg': '90%'
            },
            margin: {
                1: '4px',
                2: '8px',
                3: '16px',
                4: '24px',
                5: '32px',
                6: '48px',
                'smol': '30%',
                'med': '50%',
                'lrg': '70%',
                'xlrg': '90%'
            },
            padding: {
                1: '4px',
                2: '8px',
                3: '16px',
                4: '24px',
                5: '32px',
                6: '48px',
                'smol': '30%',
                'med': '50%',
                'lrg': '70%',
                'xlrg': '90%'
            },
            width: {
                'sml': '20%',
                'med': '33.33%',
                'lrg': '50%',
                'xlrg': '75%',
            },
            height: {
                'sml': '20%',
                'med': '33.33%',
                'lrg': '50%',
                'xlrg': '75%',
            },
        },
    },
    plugins: [],
}